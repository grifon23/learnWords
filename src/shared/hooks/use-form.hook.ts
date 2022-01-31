import { useState } from 'react'

export interface IUseFormState {
	[key: string]: string | number | boolean | any
}
type IValidateMethod<T> = (data: T) => FormErrors<T>

type FormErrors<T> = Partial<Record<keyof T, string>>

export interface IForm<T> {
	values: T
	setForm: (form: T) => void
	errors: FormErrors<T>
	setFormField: (key: keyof T, value: any) => any
	setFormError: (key: keyof T, error: string) => void
	setFormErrors: (errors: Record<keyof T, string>) => void
	onSubmit: (callback: Function) => Function
}

export const useForm = <T extends IUseFormState>(
	initValue: Partial<T>,
	validateMethod: IValidateMethod<T>,
): IForm<T> => {
	const [values, setForm] = useState(initValue as T)
	const [errors, setErrors] = useState<FormErrors<T>>({})

	const setFormError = (f: keyof T, e: string = null) => {
		setErrors(oldErrors => {
			return { ...oldErrors, [f]: e }
		})
	}
	const setFormField = (f: keyof T, v: any) => {
		setForm(oldForm => {
			return { ...oldForm, [f]: v }
		})
		setFormError(f, null)
	}

	const validate = () => {
		const errors = validateMethod(values)
		if (errors) {
			setErrors(errors)
			return true
		}
	}

	const onSubmit = (callback: Function): any => {
		if (validate && validate()) {
			return
		}

		callback()
	}

	return {
		values,
		setForm,
		errors,
		setFormField,
		setFormError,
		setFormErrors: setErrors,
		onSubmit,
	}
}
