import {useField} from 'formik';

const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
     <div style={{textAlign: 'left', margin: '1px 30px'}}>
      <label className='formik-input-label' htmlFor={props.id || props.name}>{label}</label>
      <input className='formik-input-text' id={props.id || props.name} {...field} {...props} />
      <div className='formik-input-error'>{meta.touched && meta.error ? meta.error : <br/>}</div>
     </div>
    );
   };
export default MyTextInput;