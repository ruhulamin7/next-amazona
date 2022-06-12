import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import data from '../../utils/data';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Products</h1>

      <Grid container spacing={3}>
        {data.products.map((product, index) => (
          <Grid item md={4} key={index}>
            <Card>
              <Link href={`/product/${product.slug}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
