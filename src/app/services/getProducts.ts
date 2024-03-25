export const getAllProducts = async ():Promise<productType[]> => {
// export const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/products", {
    // cache: 'no-store' === SSR gerServerSideProps
    // cache: 'force-cache' === SSG getStaticProps
    // next: {revalidate: 60} === ISR gerServerSideProps and revalidate
  });
  // if(!response.ok) throw new Error('Errror products');
  return response.json();
}

// если перейти на страницу product и в начале напишем и удалим настройки в fetch
// export const dynamic = 'force-dynamic'
// то она сервирная страница станет


export const getProductId = async (id: string) => {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  // if(!response.ok) throw new Error('Errror products');
  return response.json();
}

