import { execute } from '../../libs/execute';
import { getArticlePaging } from '@prisma/client/sql';

/*
* Int, BigInt, Float, Boolean, String, DateTime, Json, Bytes, Decimal
* */

execute(
  async (prisma) => {
    const result = await prisma.$queryRawTyped(getArticlePaging('1', 0, 20));
    console.log(result)
  },
);
