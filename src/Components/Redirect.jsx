import React from 'react';
import card1 from "../Images/plate.jpg"
import card2 from "../Images/plateImg.png"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { CardActions } from '@mui/material';



function Redirect({ handleFormSend, handleRedirectClose }) {

    return (
        <div >
            <Dialog open={handleFormSend} >
                <DialogTitle id="alert-dialog-title">
                    Thank You For Submitting The Form
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className='pb-3'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="120" image={card1} alt="green iguana" />
                                    <div className='pt-1 px-3'>Keto Diet</div>
                                </CardActionArea>
                                <CardActions >
                                    <a href="/">
                                        <button className='btnModal' >
                                            Free Ebook
                                        </button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>

                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="120" image={card2} alt="green iguana" />
                                    <div className='pt-1 px-3 fs-5'>Normal Diet</div>
                                </CardActionArea>
                                <CardActions >
                                    <a href="/">
                                        <button className='btnModal' >
                                            Free Ebook
                                        </button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>

                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="120" image={card1} alt="green iguana" />
                                    <div className='pt-1 px-3 fs-5'>Normal Diet</div>
                                </CardActionArea>
                                <CardActions >
                                    <a href="/">
                                        <button className='btnModal' >
                                            Free Ebook
                                        </button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>

                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="120" image={card2} alt="green iguana" />
                                    <div className='pt-1 px-3 fs-5'>Normal Diet</div>
                                </CardActionArea>
                                <CardActions >
                                    <a href="/">
                                        <button className='btnModal' >
                                            Free Ebook
                                        </button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='btnModal' onClick={handleRedirectClose}>CANCEL</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Redirect