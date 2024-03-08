// This data is a copy/paste from https://docs.yapily.com/api/reference/#operation/getTransactions

export const transactions = [
    {
        "meta": {
          "tracingId": "488ce8243ee74a378be722ffffec8f7f",
          "count": 1,
          "pagination": {
            "totalCount": 1,
            "self": {
              "limit": 1000,
              "sort": "-date",
              "offset": 0
            }
          }
        },
        "data": [
          {
            "id": "49d6e5c6-0130-46e3-884b-1b185432d9e0",
            "date": "2021-05-06T17:44:34.589Z",
            "bookingDateTime": "2021-05-06T17:44:34.589Z",
            "valueDateTime": "2021-05-06T17:44:34.589Z",
            "status": "BOOKED",
            "amount": -100.23,
            "currency": "GBP",
            "transactionAmount": {
              "amount": -100.23,
              "currency": "GBP"
            },
            "reference": "0",
            "description": "Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60",
            "transactionInformation": [
              "Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60"
            ],
            "isoBankTransactionCode": {
              "domainCode": {
                "code": "PMNT",
                "name": "Payments"
              },
              "familyCode": {
                "code": "ICDT",
                "name": "Issued Credit Transfers"
              },
              "subFamilyCode": {
                "code": "DMCT",
                "name": "Domestic Credit Transfer"
              }
            },
            "proprietaryBankTransactionCode": {
              "code": "PMT",
              "issuer": "modelo-sandbox"
            },
            "balance": {
              "type": "CLOSING_AVAILABLE",
              "balanceAmount": {
                "amount": 426.53,
                "currency": "GBP"
              }
            },
            "enrichment": {
              "transactionHash": {
                "hash": "adad72d7b3069ab9e4a6cb2844e2e3e9.1"
              }
            }
          }
        ],
        "links": {
          "self": "https://api.yapily.com/accounts/700004000000000000000002/transactions?from&before&limit=1000&sort=-date&offset=0&cursor"
        }
      }
]