import React from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useUpdateTitle } from "../hooks";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  // to update title
  useUpdateTitle(queryTerm);

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Results found for '${queryTerm}'`
            : `Here are the Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
