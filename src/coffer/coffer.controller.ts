import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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

    @Post('create')
    create(@Body() body) {
        // 创建coffer信息
        return 'This action adds a new coffer'+ body.name;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        // 更新coffer信息
        return `This action updates a #${id} coffer`;
    }
}
