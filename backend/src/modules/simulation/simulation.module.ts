import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

import { UnitService } from 'src/modules/unit/unit.service';
import { LeadService } from 'src/modules/lead/lead.service';

import { SimulationController } from './simulation.controller';
import { SimulationService } from './simulation.service';
import { ConsumoService } from 'src/modules/consumo/consumo.service';

@Module({
  imports: [PrismaModule],
  controllers: [SimulationController],
  providers: [SimulationService, UnitService, LeadService, ConsumoService],
})
export class SimulationModule {}
