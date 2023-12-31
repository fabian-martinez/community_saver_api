import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';
import { initModels } from '../src/config/initModels';
import { Loan } from '../src/models/loan';
import { Member } from '../src/models/member';
import { LoanTransaction } from '../src/models/loan_transaction';



const sequelize = new Sequelize({dialect: 'postgres'});
initModels(sequelize)
        
export const allLoans:Loan[] = [
    Loan.build({
        "id": 'f7dcf876-1840-4be8-aee0-3a4734d2d44',
        "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
        "original_amount": 10000,
        "updated_amount": 1000,
        "monthly_payment": 0,
        "interest_rate": 0.0200,
        "created_at": new Date(2022,1,1),
        "updated_at": new Date(2022,1,1),
        "loan_type": "ACCION"
    }),
    Loan.build({
        "id": 'ddbb5d48-9c47-46ea-a7df-3be17db984c9',
        "member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',
        "original_amount": 4200000,
        "updated_amount": 4200000,
        "monthly_payment": 0,
        "interest_rate": 0.0200,
        "created_at": new Date(2022,1,1),
        "updated_at": new Date(2022,1,1),
        "loan_type": "AGIL"
    })
]

export const findAndCountAllLoans:any = {
    count:30,
    rows:[
        Loan.build({"id": '17dcf876d-1840-4be8-aee0-3a4734d2d44',"member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',"original_amount": 10000,"updated_amount": 1000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "ACCION"}),
        Loan.build({"id": '2ddbb5d48-9c47-46ea-a7df-3be17db984c9',"member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',"original_amount": 4200000,"updated_amount": 4200000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "AGIL"}),
        Loan.build({"id": '3f7dcf876-1840-4be8-aee0-3a4734d2d44',"member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',"original_amount": 10000,"updated_amount": 1000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "ACCION"}),
        Loan.build({"id": '4ddbb5d48-9c47-46ea-a7df-3be17db984c9',"member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',"original_amount": 4200000,"updated_amount": 4200000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "AGIL"}),
        Loan.build({"id": '5f7dcf876-1840-4be8-aee0-3a4734d2d44',"member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',"original_amount": 10000,"updated_amount": 1000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "ACCION"}),
        Loan.build({"id": '6ddbb5d48-9c47-46ea-a7df-3be17db984c9',"member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',"original_amount": 4200000,"updated_amount": 4200000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "AGIL"}),
        Loan.build({"id": '7f7dcf876-1840-4be8-aee0-3a4734d2d44',"member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',"original_amount": 10000,"updated_amount": 1000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "ACCION"}),
        Loan.build({"id": '8ddbb5d48-9c47-46ea-a7df-3be17db984c9',"member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',"original_amount": 4200000,"updated_amount": 4200000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "AGIL"}),
        Loan.build({"id": '9f7dcf876-1840-4be8-aee0-3a4734d2d44',"member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',"original_amount": 10000,"updated_amount": 1000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "ACCION"}),
        Loan.build({"id": '00dbb5d48-9c47-46ea-a7df-3be17db984c9',"member_id": '324a3e00-b77e-4d9f-9184-d60ceb0fccec',"original_amount": 4200000,"updated_amount": 4200000,"monthly_payment": 0,"interest_rate": 0.0200,"created_at": new Date(2022,1,1),"updated_at": new Date(2022,1,1),"loan_type": "AGIL"}),
    ]
}
export const findAndCountAllEmpty:any = {
    count:0,
    rows:[]
}

export const loansByMember:Loan[] = [
    Loan.build({
        "id": 'f7dcf876-1840-4be8-aee0-3a4734d2d44',
        "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
        "original_amount": 10000,
        "updated_amount": 1000,
        "monthly_payment": 0,
        "interest_rate": 0.0200,
        "created_at": new Date(2022,1,1),
        "updated_at": new Date(2022,1,1),
        "loan_type": "ACCION"
    }),
    Loan.build({
        "id": 'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f',
        "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
        "original_amount": 4200000,
        "updated_amount": 4200000,
        "monthly_payment": 0,
        "interest_rate": 0.0200,
        "created_at": new Date(2022,1,1),
        "updated_at": new Date(2022,1,1),
        "loan_type": "AGIL"
    })
]

export const agilLoanByMember = [
    Loan.build({
        "id": 'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f',
        "member_id": 1,
        "original_amount": 4200000,
        "updated_amount": 4200000,
        "monthly_payment": 0,
        "interest_rate": 0.0200,
        "created_at": new Date(2022,1,1),
        "updated_at": new Date(2022,1,1),
        "loan_type": "AGIL"
    })
]

export const memberWithTwoLoans:Member = Member.build({
    id:'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
    name:'John Doe',
    loans: loansByMember
},{
    include:[Loan]
})

export const memberWithATypeLoan:Member = Member.build({
    id:'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',name:'John Doe',
    loans: agilLoanByMember
},{
    include:[Loan]
})

export const memberWithoutLoans:Member = Member.build({
    id:'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',name:'John Doe',
},{
    include:[Loan]
})

export const newLoan = Loan.build({
    "id": 'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f',
    "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
    "original_amount": 8806200,
    'updated_amount': 8806200,
    "monthly_payment": 200000,
    "interest_rate": 0.0200,
    "created_at": new Date(2022,1,1),
    "loan_type": "NEW_LOAN"
})

export const oldLoan = Loan.build({
    "id": 'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f',
    "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
    "original_amount": 8806200,
    'updated_amount': 6400000,
    "monthly_payment": 200000,
    "interest_rate": 0.0200,
    "created_at": new Date(2022,5,1),
    "loan_type": "OLD_LOAN"
})

export const oldMember = Member.build({
    member_id:"member_id",
    name:"Member Name"
})


export const loanTransactions:LoanTransaction[] = [
    LoanTransaction.build({ 'id': 1,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,1,1),'disbursement_amount': 3000000, 'last_balance':3000000}),
    LoanTransaction.build({ 'id': 2,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,2,1),'disbursement_amount': 4000000, 'last_balance':7000000}),
    LoanTransaction.build({ 'id': 3,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,3,1),'disbursement_amount': 1806200, 'last_balance':8806200}),
    LoanTransaction.build({ 'id': 4,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,2,1),'payment_amount':0      ,'interest_amount':45000 ,'last_balance':7000000 }),
    LoanTransaction.build({ 'id': 5,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,3,1),'payment_amount':0      ,'interest_amount':105000,'last_balance':8806200 }),
    LoanTransaction.build({ 'id': 6,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,4,1),'payment_amount':806200 ,'interest_amount':132093,'last_balance':8000000 }),
    LoanTransaction.build({ 'id': 7,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,5,1),'payment_amount':1600000,'interest_amount':120000,'last_balance':6400000 }),
]

export const rowAndCountData:any = {
    count: 7,
    rows: [
        LoanTransaction.build({ 'id': 1,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,1,1),'disbursement_amount': 3000000, 'last_balance':3000000}),
        LoanTransaction.build({ 'id': 2,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,2,1),'disbursement_amount': 4000000, 'last_balance':7000000}),
        LoanTransaction.build({ 'id': 3,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,3,1),'disbursement_amount': 1806200, 'last_balance':8806200}),
        LoanTransaction.build({ 'id': 4,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,2,1),'payment_amount':0      ,'interest_amount':45000 ,'last_balance':7000000 }),
        LoanTransaction.build({ 'id': 5,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,3,1),'payment_amount':0      ,'interest_amount':105000,'last_balance':8806200 }),
        LoanTransaction.build({ 'id': 6,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,4,1),'payment_amount':806200 ,'interest_amount':132093,'last_balance':8000000 }),
        LoanTransaction.build({ 'id': 7,'loan_id':'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f','date': new Date(2022,5,1),'payment_amount':1600000,'interest_amount':120000,'last_balance':6400000 }),
    ]
} 

export const oldLoanWithPaymentsAndDisbursements:Loan = Loan.build({
    "id": 'e2c2aefe-0ab1-48f8-b99a-f0faa011ea4f',
    "member_id": 'a8f6bb2c-64f2-4728-a110-575ee3e9fa28',
    "original_amount": 8806200,
    'updated_amount': 6400000,
    "monthly_payment": 200000,
    "interest_rate": 0.0200,
    "created_at": new Date(2022,5,1),
    "loan_type": "OLD_LOAN",
    "loan_transactions": LoanTransaction
},{
    include:[LoanTransaction]
})

export const paymentHistoric = {
    records:[
        {'id':5, 'date':new Date('1/05/22'),'capital':1600000, 'interest':	120000, 'balance':	6400000, 'state':	'PAID'    },
        {'id':4, 'date':new Date('1/04/22'),'capital':806200,  'interest':	132093, 'balance':	8000000, 'state':	'PAID'    },
        {'id':3, 'date':new Date('1/03/22'),'capital':0,       'interest':	105000, 'balance':	8806200, 'disbursement': 1806200, 'state':	'PAID'},
        {'id':2, 'date':new Date('1/02/22'),'capital':0,       'interest':	45000,  'balance':	7000000, 'disbursement': 4000000, 'state':	'PAID'},
        {'id':1, 'date':new Date('1/01/22'),'capital':0,       'interest':	0,      'balance':	3000000, 'disbursement': 3000000, 'state':	'PAID'},
    ],
    total: 5,
    page: 1,
    per_page: 5,
    total_pages: 1,
}

export const paymentHistoricPage1 = {
    loan:oldLoan,
    payment_records:[
        {'id':5, 'date':new Date('1/05/22'),'capital':1600000, 'interest':	120000, 'balance':	6400000, 'state':	'PAID'    },
        {'id':4, 'date':new Date('1/04/22'),'capital':806200,  'interest':	132093, 'balance':	8000000, 'state':	'PAID'    },
    ],
    "total": 5,
    "page": 1,
    "per_page": 2,
    "total_pages": 3,
} 

export const paymentHistoricPage2 = {
    loan:oldLoan,
    payment_records:[
        {'id':3, 'date':new Date('1/03/22'),'capital':0,       'interest':	105000, 'balance':	8806200, 'disbursement': 1806200, 'state':	'PAID'},
        {'id':4, 'date':new Date('1/04/22'),'capital':806200,  'interest':	132093, 'balance':	8000000, 'state':	'PAID'    },
    ],
    "total": 5,
    "page": 2,
    "per_page": 2,
    "total_pages": 3,
} 

export const paymentHistoricPage3 = {
    loan:oldLoan,
    payment_records:[
        {'number':5, 'date':new Date('1/05/22'),'capital':1600000, 'interest':	120000, 'balance':	6400000, 'state':	'PAID'    },
    ],
    "total": 5,
    "page": 3,
    "per_page": 2,
    "total_pages": 3,
} 

export const paymentScheduleToNewLoan:any = {
    loan:newLoan,
    payment_records:[
        {'number':1, 'date':new Date('1/01/22'),'capital':806200, 'interest':	176124, 'balance':	8000000, 'state':	'PENNDING'},
        {'number':2, 'date':new Date('1/02/22'),'capital':1000000, 'interest':	160000, 'balance':	7000000, 'state':	'PENNDING'},
        {'number':3, 'date':new Date('2/02/22'),'capital':1000000, 'interest':	140000, 'balance':	6000000, 'state':	'PENNDING'},
        {'number':4, 'date':new Date('3/02/22'),'capital':1000000, 'interest':	120000, 'balance':	5000000, 'state':	'PENNDING'},
        {'number':5, 'date':new Date('4/02/22'),'capital':1000000, 'interest':	100000, 'balance':	4000000, 'state':	'PENNDING'},
        {'number':6, 'date':new Date('5/02/22'),'capital':1000000, 'interest':	80000, 'balance':	3000000, 'state':	'PENNDING'},
        {'number':7, 'date':new Date('6/02/22'),'capital':1000000, 'interest':	60000, 'balance':	2000000, 'state':	'PENNDING'},
        {'number':8, 'date':new Date('7/02/22'),'capital':1000000, 'interest':	40000, 'balance':	1000000, 'state':	'PENNDING'},
        {'number':9, 'date':new Date('8/02/22'),'capital':1000000, 'interest':	20000, 'balance':	0, 'state':	'PENNDING'},
    ]
}

 export const DEFAULT_FILTER_LOANS:any = {
    where:{},
    limit: 10,
    offset: (1 - 1) * 10,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const DEFAULT_FILTER_MEMBERS:any = {
    where:{},
    limit: 10,
    offset: (1 - 1) * 10,
}

export const WITH_PAGE_FILTER_LOANS:any = {
    where:{},
    limit: 10,
    offset: (2 - 1) * 10,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_PAGE_FILTER_MEMBERS:any = {
    where:{},
    limit: 10,
    offset: (2 - 1) * 10,
}

export const WITH_PER_PAGE_FILTER_LOANS:any = {
    where:{},
    limit: 7,
    offset: (1 - 1) * 7,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_PER_PAGE_FILTER_MEMBERS:any = {
    where:{},
    limit: 7,
    offset: (1 - 1) * 7
}

export const FILTER_LOANS_EQ:any = {
    where: [{member_id : { [Op.eq]: "a8f6bb2c-64f2-4728-a110-575ee3e9fa28" }}]
    ,
    limit: 10,
    offset: (1 - 1) * 10,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const FILTER_MEMBERS_EQ:any = {
    where: [{name: { [Op.eq]: "Member Name" }}]
    ,
    limit: 10,
    offset: (1 - 1) * 10
}

export const FILTER_LOANS_GT:any = {
    where: [{created_at: { [Op.gt]: "1684472400" }}],
    limit: 10,
    offset: (1 - 1) * 10,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}
export const FILTER_LOANS_EQ_AND_GT:any = {
    where: [
        {member_id: { [Op.eq]: "a8f6bb2c-64f2-4728-a110-575ee3e9fa28" }},
        {created_at: { [Op.gt]: "1684472400" }}
    ],
    limit: 10,
    offset: (1 - 1) * 10,
    order: [
        ['created_at', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const DEFAULT_FILTER_LOAN_HISTORIC:any = {
    where:{ 'loan_id':'test' },
    limit: 10,
    offset: (1 - 1) * 10,
    order: [
        ['date', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_PAGE_FILTER_LOAN_HISTORIC:any = {
    where:{ 'loan_id':'test' },
    limit: 10,
    offset: (2 - 1) * 10,
    order: [
        ['date', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_PER_PAGE_FILTER_LOAN_HISTORIC:any = {
    where:{ 'loan_id':'test' },
    limit: 7,
    offset: (1 - 1) * 7,
    order: [
        ['date', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_SORTING_FILTER_LOAN_HISTORIC:any = {
    where:{ 'loan_id':'test' },
    limit: 7,
    offset: (1 - 1) * 7,
    order: [
        ['test_parameter', 'DESC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const WITH_SORTING_ASC_FILTER_LOAN_HISTORIC:any = {
    where:{ 'loan_id':'test' },
    limit: 7,
    offset: (1 - 1) * 7,
    order: [
        ['test_parameter', 'ASC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
}

export const allMembers:Member[] = [
    Member.build({id:"memberid1",name:"Member Numero 1"}),
    Member.build({id:"memberid2",name:"Member Numero 2"}),
    Member.build({id:"memberid3",name:"Member Numero 3"}),
    Member.build({id:"memberid4",name:"Member Numero 4"}),
    Member.build({id:"memberid5",name:"Member Numero 5"}),
    Member.build({id:"memberid6",name:"Member Numero 6"}),
    Member.build({id:"memberid7",name:"Member Numero 7"}),
    Member.build({id:"memberid8",name:"Member Numero 8"}),
    Member.build({id:"memberid9",name:"Member Numero 9"}),
    Member.build({id:"memberid10",name:"Member Numero 10"}),
]

export const findAndCountAllMembers:any = {
    count: 20,
    rows: [
        Member.build({id:"memberid1",name:"Member Numero 1"}),
        Member.build({id:"memberid2",name:"Member Numero 2"}),
        Member.build({id:"memberid3",name:"Member Numero 3"}),
        Member.build({id:"memberid4",name:"Member Numero 4"}),
        Member.build({id:"memberid5",name:"Member Numero 5"}),
        Member.build({id:"memberid6",name:"Member Numero 6"}),
        Member.build({id:"memberid7",name:"Member Numero 7"}),
        Member.build({id:"memberid8",name:"Member Numero 8"}),
        Member.build({id:"memberid9",name:"Member Numero 9"}),
        Member.build({id:"memberid10",name:"Member Numero 10"}),
    ]
}