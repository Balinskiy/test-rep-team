import * as Yup from 'yup';

export const validationSchema = Yup.object({
    gender: Yup.string().required('Gender is required'),
    weight: Yup.number()
        .required('Weight is required')
        .min(0, 'Weight must be a positive number'),
    activityTime: Yup.number()
        .required('Activity is required')
        .min(0, 'Activity time must be a positive number'),
    waterAmount: Yup.number()
        .required('Drank water amount is required')
        .min(0, 'Drank water amount must be a positive number')
        // .max(20, 'The amount of water should be no more than 20 liters'),
});