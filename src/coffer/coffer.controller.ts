import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffer')
export class CofferController {
    @Get('findAll')
    findAll() {
        // 查询所有coffer信息
        return 'This action returns all coffers';
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: string) {
        // 查询单个coffer信息
        return `This action returns a #${id} coffer`;
    }
}
