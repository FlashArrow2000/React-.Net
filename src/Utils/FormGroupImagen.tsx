import { ChangeEvent, useState } from 'react'
import { useFormikContext } from 'formik';


interface FormGroupImagenProps {
  campo: string;
  label: string;
  imagenURL: string;
}

export const FormGroupImagen = ({ campo, label, imagenURL }: FormGroupImagenProps) => {

  const divStyle = {marginTop: '10px'}
  const imgStyle = { width: '450px' }
  
  const [imagenBase64, setImagenBase64] = useState<string>();
  const [ImagenURL, setImagenURL] = useState(imagenURL)

  const { values } = useFormikContext<any>();

  const handleChange = ({currentTarget}: ChangeEvent<HTMLInputElement>) => {
    if (currentTarget.files) {
      const archivo = currentTarget.files[0];
      aBase64(archivo)
        .then((representacionBase64: string) => setImagenBase64(representacionBase64))
        .catch(err => console.log(err))

      values[campo] = archivo;

      setImagenURL('');
    }
  }

  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    } ) 
  }

  return (
    <>
      <div className='form-group'>
        <label>{label}</label>
        <div>
          <input
            type='file'
            accept='.jpg,.jpeg,.png'
            onChange={handleChange}
          />
        </div>
        {
          imagenBase64
            ? (
              <div>
                <div style={divStyle}>
                  <img
                    style={imgStyle}
                    src={imagenBase64}
                    alt='Imagen Seleccionada'
                  />
                </div>
              </div>
            )
            : null
        }
        {
          ImagenURL
            ? (
              <div>
                <div style={divStyle}>
                  <img
                    style={imgStyle}
                    src={ImagenURL}
                    alt='Imagen Seleccionada'
                  />
                </div>
              </div>
            )
            : null
        }
      </div>
    </>
  )
}

FormGroupImagen.defaultProps = {
  imagenURL: ''
}