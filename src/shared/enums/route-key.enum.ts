export enum RouteKey {
	SignIn = 'SignIn',
	SignUp = 'SignUp',
	PWRestore = 'PWRestore',
	PWChange = 'PWChange',

	Empty = 'Empty',
	Tab = 'Tab',

	Daily = 'Daily',
	Stat = 'Stat',

	NewCategory = 'NewCategory',

	DetailedTransaction = 'Detailed-Transaction',

	CreateTransaction = 'Create-Transaction',
	PayeeTransaction = 'Payee-Transaction',
	CategoryTransaction = 'Category-Transaction',
	AmountTransaction = 'Amount-Transaction',
	DateTransaction = 'Date-Transaction',

	Budget = 'Budget',
	CreateBudget = 'CreateBudget',

	Profile = 'Profile',

	BankAccounts = 'Bank-Accounts',
	NewBankAccount = 'New-Bank',
	BankAccountCreated = 'Bank-Created',
	PrivatBoarding = 'Privat-Boarding',
	ConnectToPrivat = 'Connect-To-Privat',
	PrivatBankConnected = 'Privat-Bank-Connected',

	OnBoarding = 'On-Boarding',
}

export enum BankAccountRoute {
	BankAccounts = 'Bank-Accounts',
	NewBankAccount = 'New-Bank',
	BankAccountCreated = '_Bank-Created',
}
