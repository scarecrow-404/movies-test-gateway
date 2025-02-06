import { ApiProperty } from '@nestjs/swagger';

export class MovieResponseDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the movie',
  })
  id: number;

  @ApiProperty({ example: 'The Matrix', description: 'The title of the movie' })
  title: string;

  @ApiProperty({
    example: 'https://image.tmdb.org/t/p/w500/path-to-poster.jpg',
    description: 'The URL of the movie poster',
  })
  posterPath: string;

  @ApiProperty({
    example: '2023',
    description: 'The release year of the movie',
  })
  releaseYear: string;

  @ApiProperty({
    example:
      'Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger',
    description: 'Brief overview of the movie plot',
  })
  overview: string;
}
