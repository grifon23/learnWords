import { ExceptionKeys } from '../enums'

const exceptionsDictionary = {
	[ExceptionKeys.WrongCode]: 'Неправильний код',
	[ExceptionKeys.InvalidCredentials]: 'Невірно введено дані',
	[ExceptionKeys.Forbidden]:
		'Вашу IP-адресу заблоковано. Для розблокування зверніться до адміністратора',
}

export const getMessageByExceptionKey = (key: ExceptionKeys) => {
	return exceptionsDictionary[key] || 'Помилка'
}
