
import { accounts } from "./accounts";
import { transactions } from "./transactions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create one user as example to have a UUID in the DB
  const user = await prisma.users.create({
    data: {
      name: "Example User",
      email: "example@example.com",
    },
  });

  // Iterate over the imported accounts data
  for (const accountData of accounts) {
    // Create entry for meta data first
    const newAccountData = await prisma.meta.create({
      data: {
        tracingId: accountData.meta.tracingId,
        count: accountData.meta.count,
      },
    });
    // For each account, create it with nested relations
    for (const account of accountData.Accounts) {
      await prisma.accounts.create({
        data: {
          metaId: newAccountData.uuid,
          userId: user.uuid, // Attaching all accounts to the example user
          id: account.id,
          type: account.type,
          balance: account.balance,
          currency: account.currency,
          usageType: account.usageType,
          accountType: account.accountType,
          nickname: account.nickname,
          accountNames: {
            create: account.accountNames,
          },
          accountIdentifications: {
            create: account.accountIdentifications,
          },
          accountBalances: {
            create: account.accountBalances.map((balance) => ({
              type: balance.type,
              dateTime: balance.dateTime,
              amount: balance.balanceAmount.amount,
              currency: balance.balanceAmount.currency,
              creditLineIncluded: balance.creditLineIncluded,
              // Assuming creditLines is a JSON string;
              // creditLines: JSON.stringify(balance.creditLines),
            })),
          },
        },
      });
    }
  }

  //   Iterate over imported transactions data
  for (const transactionData of transactions) {
    // Create entry for meta data
    const newTransactionMetaData = await prisma.meta.create({
      data: {
        tracingId: transactionData.meta.tracingId,
        count: transactionData.meta.count,
      },
    });

    // Create entry for Links data
    const newTransactionLinkData = await prisma.links.create( { data: {
        self: transactionData.links.self,
    }})

    // For each transaction, create it with nested relations
    for (let transaction of transactionData.data)
      await prisma.transactions.create({
        data: {
          metaId: newTransactionMetaData.uuid,
          linkId: newTransactionLinkData.uuid,
          id: transaction.id,
          date: new Date(transaction.date),
          bookingDateTime: new Date(transaction.bookingDateTime),
          valueDateTime: new Date(transaction.valueDateTime),
          status: transaction.status,
          amount: transaction.amount,
          currency: transaction.currency,
          transactionAmount: {
            create: {
              amount: transaction.transactionAmount.amount,
              currency: transaction.transactionAmount.currency,
            },
          },
          reference: transaction.reference,
          description: transaction.description,
          transactionInformation: {
            create: transaction.transactionInformation.map( (text) =>( {text: text}))
          },
          isoBankTransactionCode: {
            create: {
              domainCode: {
                create: transaction.isoBankTransactionCode.domainCode,
              },
              familyCode: {
                create: transaction.isoBankTransactionCode.familyCode,
              },
              subFamilyCode: {
                create: transaction.isoBankTransactionCode.subFamilyCode,
              },
            },
          },
          proprietaryBankTransactionCode: {
            create: transaction.proprietaryBankTransactionCode,
          },
          balance: {
            create: {
              type: transaction.balance.type,
              amount: transaction.balance.balanceAmount.amount,
              currency: transaction.balance.balanceAmount.currency,
            },
          },
          enrichment: {
            create: {
              transactionHash: {
                create: transaction.enrichment.transactionHash,
              },
            },
          },
        },
      });
  }

  console.log("Accounts and Transactions data seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
