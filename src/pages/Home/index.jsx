import React, { useState, useEffect } from "react";
import { blogFetch, today } from "../../config/api";
import { Link } from "react-router-dom";

import { Wrapper, AsteroidInfo } from "./styles";
import Loading from "../../components/Loading";

import ThemeButton from "../../components/ThemeButton";
import Container from "../../components/Container";

const Home = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const getAsteroids = async () => {
      try {
        const response = await blogFetch.get();
        const data = response.data;

        setAsteroids(data.near_earth_objects[today]);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    getAsteroids();
  }, []);

  return (
    <Container>
      {asteroids.length === 0 ? (
        <Loading />
      ) : (
        <Wrapper>
          <ThemeButton />
          <h1>Lista de asteroides próximos da terra hoje</h1>

          {asteroids.map((asteroid) => (
            <AsteroidInfo key={asteroid.id}>
              <Link to={`/asteroid/${asteroid.id}`}>
                <h2>{asteroid.name}</h2>
                <p>
                  Potencialmente perigoso?{" "}
                  <span
                    style={{
                      color: asteroid.is_potentially_hazardous_asteroid
                        ? "red"
                        : "green",
                    }}
                  >
                    {asteroid.is_potentially_hazardous_asteroid ? "Sim" : "Não"}
                  </span>
                </p>
                <p>
                  Diâmetro MÁXIMO estimado:{" "}
                  {
                    asteroid.estimated_diameter.kilometers
                      .estimated_diameter_max
                  }{" "}
                  km
                </p>
              </Link>
            </AsteroidInfo>
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default Home;
