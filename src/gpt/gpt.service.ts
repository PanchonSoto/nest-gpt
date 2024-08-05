import { Injectable } from '@nestjs/common';
import { orthograpyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {

    async orthograpyCheck() {
        return await orthograpyCheckUseCase();
    }

}
