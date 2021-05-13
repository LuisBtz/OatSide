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
position: absolute;
background-color: ${hidden1 ? 'var(--amarillo)' : 'none' };
left: 0;
top: -168px;
padding: 50px 8%;
border-radius: 25px 20px 0 0;
cursor: pointer;
p {
    font-size: 1.5rem;
    border-radius: 50px;
    border: solid 1px black;
    padding: 20px;
    box-sizing: border-box;
}
`

const Boton2 = styled.div`
font-size: 1.5rem;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: -168px;
padding: 50px 8%;
background-color: ${hidden2 ? 'var(--azul)' : 'none' };
border-radius: 25px 20px 0 0;
cursor: pointer;
p {
    border-radius: 50px;
    border: solid 1px black;
    padding: 20px;
    box-sizing: border-box;
}
`

const Boton3 = styled.div`
font-size: 1.5rem;
position: absolute;
right: 0;
top: -168px;
padding: 50px 8%;
/* background-color: var(--rojo); */
background-color: ${hidden3 ? 'var(--rojo)' : 'none'};
border-radius: 25px 20px 0 0;
cursor: pointer;
p {
    border-radius: 50px;
    border: solid 1px black;
    padding: 20px;
    box-sizing: border-box;
}
`

const Width1 = styled.div`
background-color: var(--amarillo);
display: ${hidden1 ? 'flex' : 'none' };
padding: 50px;
box-sizing: border-box;
border-radius: 0 25px 25px 25px;
`

const Width2 = styled.div`
background-color: var(--azul);
display: ${hidden2 ? 'flex' : 'none' };
padding: 50px;
box-sizing: border-box;
border-radius: 25px 25px 25px 25px;
`

const Width3 = styled.div`
background-color: var(--rojo);
display: ${hidden3 ? 'flex' : 'none'};
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
`




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
                <Descripcion1>
                    <Boton1 onClick={ () => 
                        {
                            setHidden1(true)
                            setHidden2(false) 
                            setHidden3(false) 
                        } 
                    }
                    >
                        <p>{data.nameProduct1}</p>
                    </Boton1>
                        <Width1 className='width1'>
                            <Image className='image1'>
                                <GatsbyImage
                                    image={getDataImageDes1}
                                    alt={data.imageDescriptionProduct1.alt ? data.imageDescriptionProduct1.alt : 'Oatside Image Description'}
                                />
                            </Image>
                            <Texto dangerouslySetInnerHTML={{ __html: data.descriptionProduct1 }} />
                        </Width1> 
                </Descripcion1> 

                <Descripcion2>
                    <Boton2 onClick={ () => 
                        {
                            setHidden2(true)
                            setHidden1(false)
                            setHidden3(false)
                        } 
                    }
                    >
                        <p>{data.nameProduct2}</p>
                    </Boton2>
                            <Width2 className='width2'>
                                <Image>
                                    <GatsbyImage
                                        image={getDataImageDes2}
                                        alt={data.imageDescriptionProduct2.alt ? data.imageDescriptionProduct2.alt : 'Oatside Image Description'}
                                    />
                                </Image>
                                <Texto dangerouslySetInnerHTML={{ __html: data.descriptionProduct2 }} />
                            </Width2>
                </Descripcion2>
                <Descripcion3 className='descripcion3'>
                    <Boton3 onClick={ () => 
                        {
                            setHidden3(true)
                            setHidden1(false)
                            setHidden2(false)
                        } 
                    }
                    >
                        <p>{data.nameProduct3}</p>
                    </Boton3>
                    <Width3>
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



export default Products