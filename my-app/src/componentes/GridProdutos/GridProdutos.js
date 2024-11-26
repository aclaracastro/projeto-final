import react, { useState, useEffect} from 'react';
import Cards from '../Cards/Cards';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const GridProdutos = () => {
    const [produto , setProduto] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json')
        .then(response => response.json())
        .then(response => {
            setProduto(response.data)
            
        })
        .catch(error => console.log('Erro ao buscar produtos',error))
    }, []);

    return(
        <>
            {produto.map((produto, index) => (
                <Grid container spacing={2}>
                   <div>
                        <img src={produto.sizes.xs} key={index} />
                   </div>
                </Grid>
            ))}
        </>
    );

}

export default GridProdutos;