import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class SearchQueryDto {
  @ApiProperty({
    example: 'Matrix',
    description: 'Search query string',
  })
  @IsString()
  @IsNotEmpty()
  query: string;
}
