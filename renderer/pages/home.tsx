import { ProductCategories } from "./../components/ProductCategories";
import { Cart } from "./../components/Cart";
import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import Grid from "@mui/material/Grid";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";

const Home: NextPageWithLayout = () => {
  //const { data: session } = useSession();
  ////console.log(session?.user);
  return (
    <Grid container spacing={2} sx={{ px: 2 }}>
      <Grid item xs={5}>
        <Cart />
      </Grid>
      <Grid item xs={7}>
        <ProductCategories />
      </Grid>
    </Grid>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
