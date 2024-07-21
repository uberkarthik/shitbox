import Image from 'next/image';
import Hero from "./components/Hero"
import { CarCard, SearchBar } from './components';
import { CustomFilter } from './components';
import { fetchCars } from './utils';
export default async function Home() {
  //First div is wrapper for catalog, h1 is for car catalog, p tag is right below image
  //Filters for search bar, and search bar filter components
  const allCars = await fetchCars();
  
  //If data isn't presented as an array or we have no items or not allCars
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>
  
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
              <SearchBar/>
              <div className="home__filter-container">
                {/* <CustomFilter title="fuel"/>
                <CustomFilter title="year"/> */}
              </div>
            </div>
            {!isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((car) =>
                  (<CarCard car={car} />
                  ))}
                </div>
              </section>
            ) : (
              <div className="home_error-container">
                <h2>Ooops, no cars available</h2>
                <p>{allCars?.message}</p>
              </div>
            )}
        </div>
    </main>
  );
}
