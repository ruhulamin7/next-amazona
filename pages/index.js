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
import Link from 'next/link';
import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';

export default function Home(props) {
  const { products } = props;
  console.log(products);
  return (
    <Layout>
      <div>
        <h1>Products</h1>

        <Grid container spacing={3}>
          {products.map((product, index) => (
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
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
