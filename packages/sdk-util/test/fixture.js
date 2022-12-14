const extractedArgSpecs = {
  addressFilter: {
    defaultValue: null,
    description: '',
    fields: {
      direction: {
        defaultValue: null,
        description: null,
        name: 'direction',
        type: { kind: 'ENUM', name: 'Direction', ofType: null },
      },
      receiver: {
        defaultValue: null,
        description: null,
        name: 'receiver',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      sender: {
        defaultValue: null,
        description: null,
        name: 'sender',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
    },
    name: 'addressFilter',
    type: { kind: 'INPUT_OBJECT', name: 'AddressFilter', ofType: null },
  },
  paging: {
    defaultValue: null,
    description: '',
    fields: {
      cursor: {
        defaultValue: null,
        description: null,
        name: 'cursor',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      order: {
        defaultValue: null,
        description: null,
        name: 'order',
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            fields: {
              field: {
                defaultValue: null,
                description: null,
                name: 'field',
                type: { kind: 'SCALAR', name: 'String', ofType: null },
              },
              type: {
                defaultValue: null,
                description: null,
                name: 'type',
                type: { kind: 'SCALAR', name: 'String', ofType: null },
              },
            },
            kind: 'INPUT_OBJECT',
            name: 'PageOrder',
            ofType: null,
          },
        },
      },
      size: {
        defaultValue: null,
        description: null,
        name: 'size',
        type: { kind: 'SCALAR', name: 'Int', ofType: null },
      },
    },
    name: 'paging',
    type: { kind: 'INPUT_OBJECT', name: 'PageInput', ofType: null },
  },
  timeFilter: {
    defaultValue: null,
    description: '',
    fields: {
      endDateTime: {
        defaultValue: null,
        description: null,
        name: 'endDateTime',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      startDateTime: {
        defaultValue: null,
        description: null,
        name: 'startDateTime',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
    },
    name: 'timeFilter',
    type: { kind: 'INPUT_OBJECT', name: 'TimeFilter', ofType: null },
  },
  token: {
    defaultValue: null,
    description: '',
    name: 'token',
    type: { kind: 'SCALAR', name: 'String', ofType: null },
  },
  typeFilter: {
    defaultValue: null,
    description: '',
    fields: {
      types: {
        defaultValue: null,
        description: null,
        name: 'types',
        type: {
          kind: 'LIST',
          name: null,
          ofType: { kind: 'SCALAR', name: 'String', ofType: null },
        },
      },
    },
    name: 'typeFilter',
    type: { kind: 'INPUT_OBJECT', name: 'TypeFilter', ofType: null },
  },
  types: {
    defaultValue: null,
    description: null,
    name: 'types',
    type: { kind: 'LIST', name: null, ofType: { kind: 'SCALAR', name: 'String', ofType: null } },
  },
};

const extractedListArgSpecs = {
  input: {
    name: 'input',
    description: null,
    type: {
      kind: 'INPUT_OBJECT',
      name: 'RequestConfigBlockletInput',
      ofType: null,
    },
    defaultValue: null,
    fields: {
      did: {
        name: 'did',
        description: null,
        type: { kind: 'SCALAR', name: 'String', ofType: null },
        defaultValue: null,
      },
      configs: {
        name: 'configs',
        description: null,
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'NON_NULL',
            name: null,
            ofType: { kind: 'INPUT_OBJECT', name: 'ConfigEntryInput', ofType: null },
            fields: {
              key: {
                name: 'key',
                description: null,
                type: { kind: 'SCALAR', name: 'String', ofType: null },
                defaultValue: null,
              },
              required: {
                defaultValue: null,
                description: null,
                name: 'required',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
              value: {
                name: 'value',
                description: null,
                type: { kind: 'SCALAR', name: 'String', ofType: null },
                defaultValue: null,
              },
            },
          },
        },
        defaultValue: null,
      },
    },
  },
};

const extractedComplexArgSpecs = {
  input: {
    name: 'input',
    description: '',
    type: {
      kind: 'INPUT_OBJECT',
      name: 'RequestUpdateRoutingRuleInput',
      ofType: null
    },
    defaultValue: null,
    fields: {
      id: {
        name: 'id',
        description: '',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
        defaultValue: null
      },
      rule: {
        name: 'rule',
        description: '',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'RoutingRuleInput',
          ofType: null,
          fields: {
            id: {
              name: 'id',
              description: '',
              type: { kind: 'SCALAR', name: 'String', ofType: null },
              defaultValue: null
            },
            from: {
              name: 'from',
              description: '',
              type: {
                kind: 'INPUT_OBJECT',
                name: 'RoutingRuleFromInput',
                ofType: null
              },
              defaultValue: null,
              fields: {
                pathPrefix: {
                  name: 'pathPrefix',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                header: {
                  name: 'header',
                  description: '',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'RoutingRuleHeaderInput',
                        ofType: null
                      },
                      fields: {
                        key: {
                          name: 'key',
                          description: '',
                          type: {
                            kind: 'SCALAR',
                            name: 'String',
                            ofType: null
                          },
                          defaultValue: null
                        },
                        value: {
                          name: 'value',
                          description: '',
                          type: {
                            kind: 'SCALAR',
                            name: 'String',
                            ofType: null
                          },
                          defaultValue: null
                        },
                        type: {
                          name: 'type',
                          description: '',
                          type: {
                            kind: 'ENUM',
                            name: 'HeaderMatchType',
                            ofType: null
                          },
                          defaultValue: null
                        }
                      }
                    }
                  },
                  defaultValue: null
                }
              }
            },
            to: {
              name: 'to',
              description: '',
              type: {
                kind: 'INPUT_OBJECT',
                name: 'RoutingRuleToInput',
                ofType: null
              },
              defaultValue: null,
              fields: {
                port: {
                  name: 'port',
                  description: '',
                  type: { kind: 'SCALAR', name: 'Uint32', ofType: null },
                  defaultValue: null
                },
                type: {
                  name: 'type',
                  description: '',
                  type: {
                    kind: 'ENUM',
                    name: 'BackendServiceType',
                    ofType: null
                  },
                  defaultValue: null
                },
                did: {
                  name: 'did',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                url: {
                  name: 'url',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                redirectCode: {
                  name: 'redirectCode',
                  description: '',
                  type: { kind: 'SCALAR', name: 'Int32', ofType: null },
                  defaultValue: null
                },
                interfaceName: {
                  name: 'interfaceName',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                }
              }
            },
            isProtected: {
              name: 'isProtected',
              description: '',
              type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
              defaultValue: null
            },
            interfaces: {
              name: 'interfaces',
              description: '',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'BlockletStateInterfaceInput',
                    ofType: null
                  }
                }
              },
              defaultValue: null,
              fields: {
                ruleId: {
                  name: 'ruleId',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                type: {
                  name: 'type',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                name: {
                  name: 'name',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                url: {
                  name: 'url',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                }
              }
            },
            services: {
              name: 'services',
              description: '',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'BlockletServiceInput',
                    ofType: null
                  }
                }
              },
              defaultValue: null,
              fields: {
                name: {
                  name: 'name',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                description: {
                  name: 'description',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                version: {
                  name: 'version',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                configJson: {
                  name: 'configJson',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                },
                configSchema: {
                  name: 'configSchema',
                  description: '',
                  type: { kind: 'SCALAR', name: 'String', ofType: null },
                  defaultValue: null
                }
              }
            }
          }
        },
        defaultValue: null
      }
    }
  }
};

const mutationCreateWallet = `mutation {
  createWallet(moniker: "wangshijun", passphrase: "1234556") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}`;

const queryListTransactions = `{
  listTransactions(
    paging: {size: 1}
    typeFilter: {types: ["AccountMigrate", "Transfer"]}
    addressFilter: {sender: "123", receiver: "123", direction: UNION}
  ) {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            expiredAt
            moniker
            readonly
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on AccountMigrateTx {
            pk
          }
        }
      }
    }
  }
}`;

const queryListTransactionsNoUpgrade = `{
  listTransactions(
    paging: {size: 1}
    typeFilter: {types: ["AccountMigrate", "Transfer"]}
    addressFilter: {sender: "123", receiver: "123", direction: UNION}
  ) {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            expiredAt
            moniker
            readonly
            data {
              typeUrl
              value
            }
          }
          ... on AccountMigrateTx {
            pk
          }
        }
      }
    }
  }
}`;

const queryListTransactionsNoItx = `{
  listTransactions(
    paging: {size: 1}
    typeFilter: {types: ["AccountMigrate", "Transfer"]}
    addressFilter: {sender: "123", receiver: "123", direction: UNION}
  ) {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
      }
    }
  }
}`;

const queryGetNodeInfo = `{
  getNodeInfo {
    code
    info {
      blockletRegistry
      createdAt
      description
      did
      domain
      https
      initialized
      initializedAt
      ip
      name
      pk
      port
      startedAt
      uptime
      version
      blockletOwner {
        did
        pk
      }
      diskInfo {
        app
        blocklets
        cache
        data
        log
      }
      environments {
        key
        required
        value
      }
      geoInfo {
        city
        country
        latitude
        longitude
      }
      members {
        approved
        avatar
        did
        email
        name
        pk
        role
      }
      nodeOwner {
        did
        pk
      }
      routing {
        proxyType
      }
    }
  }
}`;

const queryListBlocklets = `{
  listBlocklets {
    code
    blocklets {
      adminUrl
      author
      color
      community
      configUrl
      description
      did
      documentation
      docUrl
      folder
      gitUrl
      group
      homepage
      keywords
      logoUrl
      main
      name
      path
      price
      provider
      publicUrl
      screenshots
      support
      title
      version
      stats {
        downloads
        purchases
        star
        updatedAt
      }
    }
  }
}`;

const queryGetBlocklets = `{
  getBlocklets {
    code
    blocklets {
      addedAt
      adminInterface
      configInterface
      docInterface
      installedAt
      pausedAt
      port
      publicInterface
      source
      startedAt
      status
      configs {
        key
        required
        value
      }
      diskInfo {
        app
        blocklets
        cache
        data
        log
      }
      environments {
        key
        required
        value
      }
      meta {
        adminUrl
        author
        color
        community
        configUrl
        description
        did
        documentation
        docUrl
        folder
        gitUrl
        group
        homepage
        keywords
        logoUrl
        main
        name
        path
        price
        provider
        publicUrl
        screenshots
        support
        title
        version
        stats {
          downloads
          purchases
          star
          updatedAt
        }
      }
      routingRules {
        id
        from {
          domain
          pathPrefix
          header {
            key
            type
            value
          }
        }
        to {
          did
          port
          type
        }
      }
      runtimeInfo {
        cpuUsage
        memoryUsage
        pid
        port
        uptime
      }
    }
  }
}`;

module.exports = {
  extractedArgSpecs,
  extractedListArgSpecs,
  extractedComplexArgSpecs,
  mutationCreateWallet,
  queryListTransactions,
  queryListTransactionsNoUpgrade,
  queryListTransactionsNoItx,
  queryGetNodeInfo,
  queryListBlocklets,
  queryGetBlocklets,
};
