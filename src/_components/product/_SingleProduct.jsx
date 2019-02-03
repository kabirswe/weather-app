// React Components
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Main Components
export class SingleProduct extends React.Component {
    render() {
        return (
            <div className="single-product-block">
                <Card className="single-card">
                    <CardActionArea>
                        <CardMedia
                            className="card-media"
                            image={this.props.data.get_image_lq}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.data.name}
                            </Typography>
                            <Typography component="p">
                                {this.props.data.name}
                                {this.props.data.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
