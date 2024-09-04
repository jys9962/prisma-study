import { PrismaClient } from '@prisma/client';

export function execute(
  callback: (args: PrismaClient) => any,
) {
  const prisma = new PrismaClient({
    log: ['query'],
    errorFormat: 'pretty',
  });
  const logResult = (result: any) => {
    console.log('\n');
    console.log(result);
  };
  const disconnect = () => prisma.$disconnect();

  Promise.resolve(prisma)
    .then(callback)
    .then(logResult)
    .then(disconnect)
    .catch(console.error.bind(console));
}
