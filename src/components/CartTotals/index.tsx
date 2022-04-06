import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import MainButton from '../MainButton';
import { Grid } from '@mui/material';


function CartTotals(props: any) {
    return (
        <Box >
            <Card sx={{minWidth:'280px'}}>
                <CardContent sx={{textAlign:'end'}}>
                    <Grid container >
                        <Grid item xs={6} >
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Subtotal:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                25.00 $
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={6} >
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Delivery Costs:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                12.99 $
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr color={'lightgrey'} />
                    <Grid container >
                        <Grid item xs={6} >
                            <Typography variant='h6'>
                                Order Total:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant='h6'>
                                37.99 $
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{display:'grid'}}>
                    <Link href="/login" passHref>
                        <MainButton>
                            LOGIN
                        </MainButton>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CartTotals;