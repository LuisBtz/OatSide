import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const Products = ({data}) => {

    const getDataImage1 = getImage(data.imageProduct1);
    const getDataImage2 = getImage(data.imageProduct2);
    const getDataImage3 = getImage(data.imageProduct3);

    const getDataImageDes1 = getImage(data.imageDescriptionProduct1);
    const getDataImageDes2 = getImage(data.imageDescriptionProduct2);
    const getDataImageDes3 = getImage(data.imageDescriptionProduct3);

    // State 1
const [hidden1, setHidden1] = useState(true);
const [hidden2, setHidden2] = useState(false);
const [hidden3, setHidden3] = useState(false);


  return (
        <ContainerProducts>
            <Cartones >
                <Product>
                    <ImageStyleCarton
                        image={getDataImage1}
                        alt={data.imageProduct1.alt ? data.imageProduct1.alt : 'Oatside Carton'}
                    />
                </Product>
                <Product>
                    <ImageStyleCarton
                        image={getDataImage2}
                        alt={data.imageProduct2.alt ? data.imageProduct2.alt : 'Oatside Carton'}
                    />
                </Product>
                <Product>
                    <ImageStyleCarton
                        image={getDataImage3}
                        alt={data.imageProduct3.alt ? data.imageProduct3.alt : 'Oatside Carton'}
                    />
                </Product>
            </Cartones>

            <Descripciones>
                <Descripcion1 className={hidden1 ? 'clase1' : ''}>
                    <Boton1 className='boton' onClick={ () => 
                        {
                            setHidden1(true)
                            setHidden2(false) 
                            setHidden3(false) 
                        } 
                    }
                    >
                        <p>{data.nameProduct1}</p>
                    </Boton1>
                        <Width1 className='width'>
                            <Image className='image1'>
                                <GatsbyImage
                                    image={getDataImageDes1}
                                    alt={data.imageDescriptionProduct1.alt ? data.imageDescriptionProduct1.alt : 'Oatside Image Description'}
                                />
                            </Image>
                            <Texto dangerouslySetInnerHTML={{ __html: data.descriptionProduct1 }} />
                        </Width1> 
                </Descripcion1> 

                <Descripcion2 className={hidden2 ? 'clase2' : ''}>
                    <Boton2 className='boton' onClick={ () => 
                        {
                            setHidden2(true)
                            setHidden1(false)
                            setHidden3(false)
                        } 
                    }
                    >
                        <p>{data.nameProduct2}</p>
                    </Boton2>
                            <Width2 className='width'>
                                <Image>
                                    <GatsbyImage
                                        image={getDataImageDes2}
                                        alt={data.imageDescriptionProduct2.alt ? data.imageDescriptionProduct2.alt : 'Oatside Image Description'}
                                    />
                                </Image>
                                <Texto dangerouslySetInnerHTML={{ __html: data.descriptionProduct2 }} />
                            </Width2>
                </Descripcion2>
                <Descripcion3 className={hidden3 ? 'clase3' : ''}>
                    <Boton3 className='boton' onClick={ () => 
                        {
                            setHidden3(true)
                            setHidden1(false)
                            setHidden2(false)
                        } 
                    }
                    >
                        <p>{data.nameProduct3}</p>
                    </Boton3>
                    <Width3 className='width'>
                        <Image>
                            <GatsbyImage
                                image={getDataImageDes3}
                                alt={data.imageDescriptionProduct3.alt ? data.imageDescriptionProduct3.alt : 'Oatside Image Description'}
                            />
                        </Image>
                        <Texto dangerouslySetInnerHTML={{ __html: data.descriptionProduct3 }} />
                    </Width3>
                </Descripcion3>
            </Descripciones>
            
        </ContainerProducts>

  )
}


const ContainerProducts = styled.section`
padding-top: 50px;
width: 80%;
margin: 0 auto;
`

const Cartones = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Product = styled.div`
width: 28%;
box-sizing: border-box;
`

const ImageStyleCarton = styled(GatsbyImage)`

`


const Descripcion1 = styled.div`
`
const Descripcion2 = styled.div`
`
const Descripcion3 = styled.div`
`

const Boton1 = styled.div`
width: 180px;
position: absolute;
background-color: none;
left: 0;
top: -153px;
padding: 50px 8%;
border-radius: 25px 20px 0 0;
cursor: pointer;
text-align: center;
p {
    font-size: 1.2rem;
    border-radius: 50px;
    border: solid 1px black;
    padding: 10px 32px;
    box-sizing: border-box;
}
`

const Boton2 = styled.div`
width: 180px;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: -143px;
padding: 50px 8%;
background-color: none;
border-radius: 25px 20px 0 0;
cursor: pointer;
text-align: center;
p {
    font-size: 1.2rem;
    border-radius: 50px;
    border: solid 1px black;
    padding: 10px 32px;
    box-sizing: border-box;
}
`

const Boton3 = styled.div`
width: 180px;
text-align: center;
position: absolute;
right: 0;
top: -153px;
padding: 50px 8%;
background-color: none;
border-radius: 25px 20px 0 0;
cursor: pointer;
p {
    font-size: 1.2rem;
    border-radius: 50px;
    border: solid 1px black;
    padding: 10px 32px;
    box-sizing: border-box;
}
`

const Width1 = styled.div`
background-color: var(--amarillo);
display: none;
padding: 50px;
box-sizing: border-box;
border-radius: 0 25px 25px 25px;
`

const Width2 = styled.div`
background-color: var(--azul);
display: none;
padding: 50px;
box-sizing: border-box;
border-radius: 25px 25px 25px 25px;
`

const Width3 = styled.div`
background-color: var(--rojo);
display: none;
padding: 50px;
box-sizing: border-box;
border-radius: 25px 0 25px 25px;
`

const Image = styled.div`
width: 30%;
`

const Texto = styled.div`
align-self: center;
text-align: center;
width: 50%;
margin: 0 auto;
font-size: 1.5rem;
strong, b {
font-family: var(--akMed)
}
`
const Descripciones = styled.div`
margin-top: 150px;
position: relative;

.clase1 {
    .boton {
        background-color: var(--amarillo);
    }
    .width {
        display: flex;
    }
}

.clase2 {
    .boton {
        background-color: var(--azul);
    }
    .width {
        display: flex;
    }
}

.clase3 {
    .boton {
        background-color: var(--rojo);
    }
    .width {
        display: flex;
    }
}
`




export default Products