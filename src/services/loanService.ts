import { NotFoundError } from "../helpers/errors";
import { Loan, LoanModel } from "../models/loan";
import { LoanTransaction } from "../models/loan_transaction";
import { DEFAULT_PAGINATION } from "../helpers/enums";
import { buildFilter } from "../helpers/utilities";
import logger from "../helpers/loggerService";


class LoanService {


    public async getLoan(loan_id: string):Promise<Loan> {
        const loan = await Loan.findByPk(loan_id)


        if (!loan) {
            throw new NotFoundError(`Loan with id ${loan_id} Not Found`)
        }
        logger.debug(`Getting ${loan_id} Loan`)
        return loan;

    }
    
    public async getLoans(pagination:{page:number,per_page:number},filter?:any[]):Promise<any> {
        
        let whereClause: any = {};
        
        const page = (isNaN(pagination.page) || pagination.page < 1)?DEFAULT_PAGINATION.PAGE:pagination.page
        const per_page = (isNaN(pagination.per_page ) || pagination.per_page < 1)?DEFAULT_PAGINATION.PER_PAGE:pagination.per_page
        
        if(filter){
            whereClause = buildFilter(filter)
        }

        const rowAndCount = await Loan.findAndCountAll({
            where:whereClause,
            limit: per_page,
            offset: (page - 1) * per_page,
            order: [
                ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
          ],
        })

        if (rowAndCount.rows.length === 0) {
            throw new NotFoundError("Loan Not Found")
        }
        
        const response = {
            'total':rowAndCount.count,
            'page':page,
            'per_page':per_page,
            'total_pages':Math.ceil(rowAndCount.count/per_page),
            'items':rowAndCount.rows
        }
        logger.debug(`Getting ${response.items.length} loans of ${response.total} to filter ${JSON.stringify(filter)}`)
        return response;
    }

    public async getLoanTransactions(loan_id:string,pagination:{page:number,per_page:number},sort:string='id'):Promise<any> {

        const page = (isNaN(pagination.page) || pagination.page < 1)?DEFAULT_PAGINATION.PAGE:pagination.page
        const per_page = (isNaN(pagination.per_page ) || pagination.per_page < 1)?DEFAULT_PAGINATION.PER_PAGE:pagination.per_page
        const sorting_order = sort.startsWith('-')?'ASC':'DESC';
        const sorting = sort.startsWith('-')?sort.substring(1):sort;
        const rowAndCount = await LoanTransaction.findAndCountAll({
            where:{
                'loan_id':loan_id
            },
            limit: per_page,
            offset: (page - 1) * per_page,
            order: [[sorting, sorting_order],]
        });

        if (rowAndCount.rows.length === 0) {
            throw new NotFoundError(`Loan with id ${loan_id} Not Found Historic`)
        }

        const response = {
            'total':rowAndCount.count,
            'page':page,
            'per_page':per_page,
            'total_pages':Math.ceil(rowAndCount.count/per_page),
            'records':rowAndCount.rows
        }
        logger.debug(`Getting page ${response.page} with ${response.records.length} transactions from ${response.total} to loan ${loan_id}`)
        return response;
    }

}

export default LoanService