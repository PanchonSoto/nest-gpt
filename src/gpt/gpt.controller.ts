import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}


  @Post('orthography-check')
  orthograpyCheck(@Body() body: any) {
    return body;
  }
}
