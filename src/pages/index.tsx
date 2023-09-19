import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryPicker from "../components/CategoryPicker";
import FeaturedBlogs from "../components/FeaturedBlogs";
import FeaturedProducts from "../components/FeaturedProducts";
import { BannerType, BlogsType, ProductType } from "../components/types";
interface Props {
  bannerData: BannerType;
  featuredProducts: ProductType[];
  blogs: BlogsType[];
}

const Home: NextPage<Props> = ({ bannerData, featuredProducts, blogs,  }) => {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner bannerData={bannerData} />

      <CategoryPicker />

      <FeaturedProducts data={featuredProducts} />

      <FeaturedBlogs blogs={blogs} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resBannerContent = await fetch("https://data-api-jet.vercel.app/banner_content");
  const bannerData: BannerType = await resBannerContent.json();

  const resFeaturedProducts = await fetch(
    "https://data-api-jet.vercel.app/products/?_limit=4"
  );
  const featuredProducts: ProductType[] = await resFeaturedProducts.json();

  const resBlogs = await fetch("https://data-api-jet.vercel.app/blogs/?_limit=3");
  const blogs: ProductType[] = await resBlogs.json();

  return {
    props: {
      bannerData: bannerData,
      featuredProducts: featuredProducts,
      blogs: blogs,
    },
  };
};
export default Home;
