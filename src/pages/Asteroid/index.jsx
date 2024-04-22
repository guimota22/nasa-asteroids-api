import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogFetch, apiKey } from "../../config/api";
import { AsteroidContainer, AsteroidInfo } from "./styles";
import ButtonBack from "../../components/BackButton";
import ThemeButton from "../../components/ThemeButton";
import Container from "../../components/Container";

const Asteroid = () => {
  const { id } = useParams();
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogFetch.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`
        );
        const data = response.data;

        setAsteroid(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      <AsteroidContainer>
        {asteroid && (
          <AsteroidInfo>
            <ThemeButton />
            <h1>Detalhes do Asteroide: {asteroid?.name}</h1>
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
              Diâmetro Máximo Estimado:{" "}
              {asteroid?.estimated_diameter?.kilometers?.estimated_diameter_max}{" "}
              km
            </p>
            <p>
              Velocidade relativa por hora:{" "}
              {
                asteroid?.close_approach_data[0]?.relative_velocity
                  ?.kilometers_per_hour
              }
            </p>
            <p>Magnitude absoluta: {asteroid?.absolute_magnitude_h}</p>
            <Link to="/">
              <ButtonBack />
            </Link>
          </AsteroidInfo>
        )}
      </AsteroidContainer>
    </Container>
  );
};

export default Asteroid;
