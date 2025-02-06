import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { MovieResponseDto } from './dto/movie-response.dto';
import { SearchQueryDto } from './dto/search-query.dto';
import { PaginationDto } from './dto/pagination.dto';
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  @ApiOperation({ summary: 'Get popular movies' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of popular movies',
    type: [MovieResponseDto],
  })
  async getMovies(@Query() paginationDto: PaginationDto) {
    const page = paginationDto.page !== undefined ? +paginationDto.page : 1;
    return this.moviesService.getMovies(page);
  }

  @Get('trending')
  @ApiOperation({ summary: 'Get trending movies' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of trending movies',
    type: [MovieResponseDto],
  })
  async getTrendingMovies() {
    return this.moviesService.getTrendingMovies();
  }

  @Get('top_rated')
  @ApiOperation({ summary: 'Get top rated movies' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of top rated movies',
    type: [MovieResponseDto],
  })
  async getTopRatedMovies() {
    return this.moviesService.getTopRatedMovies();
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Get upcoming movies' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of upcoming movies',
    type: [MovieResponseDto],
  })
  async getUpcomingMovies() {
    return this.moviesService.getUpcomingMovies();
  }
}
