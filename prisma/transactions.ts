// First data entry is a copy/paste from https://docs.yapily.com/api/reference/#operation/getTransactions
// Others are mocked using AI

export const transactions = [
  {
    meta: {
      tracingId: "488ce8243ee74a378be722ffffec8f7f",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "49d6e5c6-0130-46e3-884b-1b185432d9e0",
        date: "2021-05-06T17:44:34.589Z",
        bookingDateTime: "2021-05-06T17:44:34.589Z",
        valueDateTime: "2021-05-06T17:44:34.589Z",
        status: "BOOKED",
        amount: -100.23,
        currency: "GBP",
        transactionAmount: {
          amount: -100.23,
          currency: "GBP",
        },
        reference: "0",
        description:
          "Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60",
        transactionInformation: [
          "Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 426.53,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "adad72d7b3069ab9e4a6cb2844e2e3e9.1",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor",
    },
  },

  {
    meta: {
      tracingId: "af9d5558-cb94-4e01-852d-c25f8ae89b6a",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "682c70b6-1e5a-490d-8b47-eb25b5c4810e",
        date: "2021-07-17T17:44:34.589000Z",
        bookingDateTime: "2021-07-17T17:44:34.589000Z",
        valueDateTime: "2021-07-17T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 945.94,
        currency: "GBP",
        transactionAmount: {
          amount: 945.94,
          currency: "GBP",
        },
        reference: "37",
        description:
          "Transaction for Payment Id: 34a149e0-a1c7-4dbc-b19f-af6c39eddcb7",
        transactionInformation: [
          "Transaction for Payment Id: 34a149e0-a1c7-4dbc-b19f-af6c39eddcb7",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 4848.46,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "d188ef43-2b0d-5b76-a402-ea7b02c07fe9",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=682c70b6-1e5a-490d-8b47-eb25b5c4810e",
    },
  },
  {
    meta: {
      tracingId: "58b6bc4a-6502-4cfb-90b6-306840d2f527",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "84ba02aa-18c7-41a3-b2f1-6c9873ed7473",
        date: "2022-09-10T17:44:34.589000Z",
        bookingDateTime: "2022-09-10T17:44:34.589000Z",
        valueDateTime: "2022-09-10T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 617.6,
        currency: "GBP",
        transactionAmount: {
          amount: 617.6,
          currency: "GBP",
        },
        reference: "38",
        description:
          "Transaction for Payment Id: 2cda1bce-8842-402e-8faa-527861376fe5",
        transactionInformation: [
          "Transaction for Payment Id: 2cda1bce-8842-402e-8faa-527861376fe5",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 4025.6,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "a3f58e6c-adb5-5533-b343-c7f33f88478b",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=84ba02aa-18c7-41a3-b2f1-6c9873ed7473",
    },
  },
  {
    meta: {
      tracingId: "31567c3a-31d4-4290-bc0b-596c96c3d4da",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "f6e78d28-af6d-46de-aaea-e56a4809e403",
        date: "2023-04-17T17:44:34.589000Z",
        bookingDateTime: "2023-04-17T17:44:34.589000Z",
        valueDateTime: "2023-04-17T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 29.82,
        currency: "GBP",
        transactionAmount: {
          amount: 29.82,
          currency: "GBP",
        },
        reference: "39",
        description:
          "Transaction for Payment Id: 360eaabb-61ea-49f0-9880-d448da570453",
        transactionInformation: [
          "Transaction for Payment Id: 360eaabb-61ea-49f0-9880-d448da570453",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 7482.17,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "7b63e3d8-9a32-5386-bd61-b4be394f9916",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=f6e78d28-af6d-46de-aaea-e56a4809e403",
    },
  },
  {
    meta: {
      tracingId: "7635b182-cfe4-48e2-8220-d60cbe87a79d",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "0af122bb-d2cf-41a3-89c8-b8c31653de6e",
        date: "2021-07-11T17:44:34.589000Z",
        bookingDateTime: "2021-07-11T17:44:34.589000Z",
        valueDateTime: "2021-07-11T17:44:34.589000Z",
        status: "BOOKED",
        amount: -941.53,
        currency: "GBP",
        transactionAmount: {
          amount: -941.53,
          currency: "GBP",
        },
        reference: "40",
        description:
          "Transaction for Payment Id: dd81bc0f-9890-4c2d-b791-7b10635e6a2b",
        transactionInformation: [
          "Transaction for Payment Id: dd81bc0f-9890-4c2d-b791-7b10635e6a2b",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 7841.62,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "70e7b120-e360-56ac-b2ab-85618676cbb3",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=0af122bb-d2cf-41a3-89c8-b8c31653de6e",
    },
  },
  {
    meta: {
      tracingId: "e30dfae1-cd21-4899-9628-1de858d1219e",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "65c8bf25-6406-4a8f-b9ea-93d3cd1165fb",
        date: "2022-12-05T17:44:34.589000Z",
        bookingDateTime: "2022-12-05T17:44:34.589000Z",
        valueDateTime: "2022-12-05T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 821.29,
        currency: "GBP",
        transactionAmount: {
          amount: 821.29,
          currency: "GBP",
        },
        reference: "41",
        description:
          "Transaction for Payment Id: 12e8e964-ff7e-43c0-8f3c-31a281101311",
        transactionInformation: [
          "Transaction for Payment Id: 12e8e964-ff7e-43c0-8f3c-31a281101311",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 8243.42,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "1fd7b758-940b-5ebc-89f7-cd5b91c95278",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=65c8bf25-6406-4a8f-b9ea-93d3cd1165fb",
    },
  },
  {
    meta: {
      tracingId: "c0bb7c74-71ba-4a6d-9b57-f72526e6bd0d",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "b9ee6971-311c-4446-8b92-67d0632dec99",
        date: "2023-03-20T17:44:34.589000Z",
        bookingDateTime: "2023-03-20T17:44:34.589000Z",
        valueDateTime: "2023-03-20T17:44:34.589000Z",
        status: "BOOKED",
        amount: -913.57,
        currency: "GBP",
        transactionAmount: {
          amount: -913.57,
          currency: "GBP",
        },
        reference: "42",
        description:
          "Transaction for Payment Id: b4fe58fc-8c16-4df3-92ad-26facc234ff7",
        transactionInformation: [
          "Transaction for Payment Id: b4fe58fc-8c16-4df3-92ad-26facc234ff7",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 875.27,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "bf1ca2b4-4f3d-5377-8a7a-ccbf5886cab4",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=b9ee6971-311c-4446-8b92-67d0632dec99",
    },
  },
  {
    meta: {
      tracingId: "df116a93-6d1d-491f-9c92-9e2665503666",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "803ccbff-1dfd-47ab-8a8c-ea4ebe1ca242",
        date: "2022-11-04T17:44:34.589000Z",
        bookingDateTime: "2022-11-04T17:44:34.589000Z",
        valueDateTime: "2022-11-04T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 474.0,
        currency: "GBP",
        transactionAmount: {
          amount: 474.0,
          currency: "GBP",
        },
        reference: "43",
        description:
          "Transaction for Payment Id: 4a1afbd6-af63-403a-a836-135d839a795c",
        transactionInformation: [
          "Transaction for Payment Id: 4a1afbd6-af63-403a-a836-135d839a795c",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 3898.81,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "7b01693c-8af8-5885-b97a-e701e27b545d",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=803ccbff-1dfd-47ab-8a8c-ea4ebe1ca242",
    },
  },
  {
    meta: {
      tracingId: "4c4fbac2-354d-4c05-92dd-1a07193aa707",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "8650789c-d43b-469c-a44b-4730eb17eee0",
        date: "2021-06-14T17:44:34.589000Z",
        bookingDateTime: "2021-06-14T17:44:34.589000Z",
        valueDateTime: "2021-06-14T17:44:34.589000Z",
        status: "BOOKED",
        amount: -266.97,
        currency: "GBP",
        transactionAmount: {
          amount: -266.97,
          currency: "GBP",
        },
        reference: "44",
        description:
          "Transaction for Payment Id: 7d2979dd-d4df-4cf2-9937-f037673c034b",
        transactionInformation: [
          "Transaction for Payment Id: 7d2979dd-d4df-4cf2-9937-f037673c034b",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 1258.66,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "fc83c9b2-22d9-5fcb-bfc4-cf1973bd7f34",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=8650789c-d43b-469c-a44b-4730eb17eee0",
    },
  },
  {
    meta: {
      tracingId: "4bd29e7b-33be-4e81-bde1-261b25f29a84",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "14c6c1b9-19fb-42a2-88c6-e2f55762e30e",
        date: "2021-08-17T17:44:34.589000Z",
        bookingDateTime: "2021-08-17T17:44:34.589000Z",
        valueDateTime: "2021-08-17T17:44:34.589000Z",
        status: "BOOKED",
        amount: -830.55,
        currency: "GBP",
        transactionAmount: {
          amount: -830.55,
          currency: "GBP",
        },
        reference: "45",
        description:
          "Transaction for Payment Id: b9b92254-dbeb-448c-8426-0dca88493edc",
        transactionInformation: [
          "Transaction for Payment Id: b9b92254-dbeb-448c-8426-0dca88493edc",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 7648.58,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "b9c3a3b5-6918-56a5-bbed-5adc958d5884",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=14c6c1b9-19fb-42a2-88c6-e2f55762e30e",
    },
  },
  {
    meta: {
      tracingId: "f5a5617c-25a3-493a-b348-8f7738528a81",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "8eb61848-6e38-44c8-a311-02257cac3ad5",
        date: "2021-06-06T17:44:34.589000Z",
        bookingDateTime: "2021-06-06T17:44:34.589000Z",
        valueDateTime: "2021-06-06T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 413.24,
        currency: "GBP",
        transactionAmount: {
          amount: 413.24,
          currency: "GBP",
        },
        reference: "46",
        description:
          "Transaction for Payment Id: 24a8f40a-0bae-48d8-90b5-7eff83a4044d",
        transactionInformation: [
          "Transaction for Payment Id: 24a8f40a-0bae-48d8-90b5-7eff83a4044d",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 3705.98,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "ff7625fb-e53e-5a13-b400-c0e03e3242c6",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=8eb61848-6e38-44c8-a311-02257cac3ad5",
    },
  },
  {
    meta: {
      tracingId: "22869002-0d8b-4142-ae48-44a64b6932f7",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "7c421efa-d27e-4204-bbe3-26cfc3b34f38",
        date: "2021-08-04T17:44:34.589000Z",
        bookingDateTime: "2021-08-04T17:44:34.589000Z",
        valueDateTime: "2021-08-04T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 222.88,
        currency: "GBP",
        transactionAmount: {
          amount: 222.88,
          currency: "GBP",
        },
        reference: "47",
        description:
          "Transaction for Payment Id: 877d17cc-5cf0-492f-bf1d-a5a9510a9e66",
        transactionInformation: [
          "Transaction for Payment Id: 877d17cc-5cf0-492f-bf1d-a5a9510a9e66",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 6068.32,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "6bdbc1da-ceba-521b-a1f5-345910f58d07",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=7c421efa-d27e-4204-bbe3-26cfc3b34f38",
    },
  },
  {
    meta: {
      tracingId: "707e4afd-f396-4416-bd32-1aec8e6ac02c",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "57fece55-c6de-44f4-bd8c-bfc7a7be4d2c",
        date: "2023-03-20T17:44:34.589000Z",
        bookingDateTime: "2023-03-20T17:44:34.589000Z",
        valueDateTime: "2023-03-20T17:44:34.589000Z",
        status: "BOOKED",
        amount: -255.44,
        currency: "GBP",
        transactionAmount: {
          amount: -255.44,
          currency: "GBP",
        },
        reference: "48",
        description:
          "Transaction for Payment Id: f89c5b3e-85d8-42b2-bbd4-e08aa7ec9e51",
        transactionInformation: [
          "Transaction for Payment Id: f89c5b3e-85d8-42b2-bbd4-e08aa7ec9e51",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 495.34,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "9ba68f1d-2dd7-5801-9bb9-b0bf1e892222",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=57fece55-c6de-44f4-bd8c-bfc7a7be4d2c",
    },
  },
  {
    meta: {
      tracingId: "7bf02f96-e468-4e04-a16c-97424162211a",
      count: 1,
      pagination: {
        totalCount: 1,
        self: {
          limit: 1000,
          sort: "-date",
          offset: 0,
        },
      },
    },
    data: [
      {
        id: "8ca251ca-853f-4cba-85e6-395c81f463dd",
        date: "2022-06-25T17:44:34.589000Z",
        bookingDateTime: "2022-06-25T17:44:34.589000Z",
        valueDateTime: "2022-06-25T17:44:34.589000Z",
        status: "RECEIVED",
        amount: 720.47,
        currency: "GBP",
        transactionAmount: {
          amount: 720.47,
          currency: "GBP",
        },
        reference: "49",
        description:
          "Transaction for Payment Id: 5f8ac90c-c7f8-4eee-ac44-4f1cadd8b54c",
        transactionInformation: [
          "Transaction for Payment Id: 5f8ac90c-c7f8-4eee-ac44-4f1cadd8b54c",
        ],
        isoBankTransactionCode: {
          domainCode: {
            code: "PMNT",
            name: "Payments",
          },
          familyCode: {
            code: "ICDT",
            name: "Issued Credit Transfers",
          },
          subFamilyCode: {
            code: "DMCT",
            name: "Domestic Credit Transfer",
          },
        },
        proprietaryBankTransactionCode: {
          code: "PMT",
          issuer: "modelo-sandbox",
        },
        balance: {
          type: "CLOSING_AVAILABLE",
          balanceAmount: {
            amount: 4676.82,
            currency: "GBP",
          },
        },
        enrichment: {
          transactionHash: {
            hash: "3c03e878-7e92-57d8-968a-8ed3f96d1642",
          },
        },
      },
    ],
    links: {
      self: "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor=8ca251ca-853f-4cba-85e6-395c81f463dd",
    },
  },
];
