import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MovieResponseDto } from './dto/movie-response.dto';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class MoviesService {
  private readonly TMDB_API_KEY = process.env.TMDB_API_KEY;
  private readonly TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private readonly httpService: HttpService) {}

  async getMovies(page: number): Promise<MovieResponseDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.TMDB_BASE_URL}/movie/popular?api_key=${this.TMDB_API_KEY}&page=${page}`,
      ),
    );

    return this.transformMovieData(data.results);
  }

  async getTrendingMovies(): Promise<MovieResponseDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.TMDB_BASE_URL}/trending/movie/week?api_key=${this.TMDB_API_KEY}`,
      ),
    );

    return this.transformMovieData(data.results);
  }

  async getTopRatedMovies(): Promise<MovieResponseDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.TMDB_BASE_URL}/movie/top_rated?api_key=${this.TMDB_API_KEY}`,
      ),
    );

    return this.transformMovieData(data.results);
  }

  async getUpcomingMovies(): Promise<MovieResponseDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.TMDB_BASE_URL}/movie/upcoming?api_key=${this.TMDB_API_KEY}`,
      ),
    );

    return this.transformMovieData(data.results);
  }

  private transformMovieData(movies: any[]): MovieResponseDto[] {
    return movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseYear: new Date(movie.release_date).getFullYear().toString(),
      overview: movie.overview,
    }));
  }
}
