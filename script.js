      /*<![CDATA[*/
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'healthyselfstore.myshopify.com',
            storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '1496674861098',
              node: document.getElementById('product-component-1575874039871'),
              moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2"
                },
              "border-radius": "4px",
              "padding-left": "30px",
              "padding-right": "30px"
            },
            "quantityInput": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px"
            }
          },
          "text": {
            "button": "Add to Cart"
          },
          "googleFonts": [
            "Roboto"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-family": "Roboto, sans-serif",
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              ":hover": {
                "background-color": "#006fe6"
              },
              "background-color": "#007bff",
              ":focus": {
                "background-color": "#006fe6"
              },
              "border-radius": "4px",
              "padding-left": "30px",
              "padding-right": "30px"
            },
            "quantityInput": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px"
            },
            "title": {
              "font-weight": "normal"
            }
          },
          "googleFonts": [
            "Roboto"
          ],
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              "font-family": "Roboto, sans-serif",
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              ":hover": {
                "background-color": "#006fe6"
              },
              "background-color": "#007bff",
              ":focus": {
                "background-color": "#006fe6"
              },
              "border-radius": "4px"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "googleFonts": [
            "Roboto"
          ]
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-family": "Roboto, sans-serif",
              "background-color": "#007bff",
              ":hover": {
                "background-color": "#006fe6"
              },
              ":focus": {
                "background-color": "#006fe6"
              }
            },
            "count": {
              "font-size": "14px"
            }
          },
          "googleFonts": [
            "Roboto"
          ]
        }
      },
            });
          });
        }
      })();
      /*]]>*/



      /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'healthyselfstore.myshopify.com',
              storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '4339623886890',
                node: document.getElementById('product-component-1575874087063'),
                moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "img": {
                "margin-bottom": "0px",
              },
              "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2",
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            },
            "text": {
              "button": "Add to Cart",
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to Cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#007bff",
                ":hover": {
                  "background-color": "#006fe6"
                },
                ":focus": {
                  "background-color": "#006fe6"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/



        /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'healthyselfstore.myshopify.com',
              storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '12330858954',
                node: document.getElementById('product-component-1575874125996'),
                moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            },
            "text": {
              "button": "Add to Cart"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to Cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#1dd0c2",
                ":hover": {
                  "background-color": "#006fe6"
                },
                ":focus": {
                  "background-color": "#006fe6"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/

        /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'healthyselfstore.myshopify.com',
              storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '1496674861098',
                node: document.getElementById('product-component-1575877572575'),
                moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#007bff",
                ":hover": {
                  "background-color": "#006fe6"
                },
                ":focus": {
                  "background-color": "#006fe6"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/

                /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'healthyselfstore.myshopify.com',
              storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '4339623886890',
                node: document.getElementById('product-component-1575877599974'),
                moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "img":{
                "margin-bottom": "0px"
              },
              "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#007bff",
                ":hover": {
                  "background-color": "#006fe6"
                },
                ":focus": {
                  "background-color": "#006fe6"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/

        /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'healthyselfstore.myshopify.com',
              storefrontAccessToken: '71ee88b4912e120659a1ba8385294d8e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '12330858954',
                node: document.getElementById('product-component-1575877714839'),
                moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
             "title": {
                "font-weight": "normal",
                "font-size": "14px",
                "text-transform": "uppercase",
              },
              "price": {
                "color": "#1dd0c2",
                "font-weight": "700",
              },
              "button": {
                "text-transform": "uppercase",
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "12px",
                "padding-bottom": "12px",
                ":hover": {
                  "background-color": "#1eb8ac"
                },
                "background-color": "#1dd0c2",
                ":focus": {
                  "background-color": "#1dd0c2"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px",
                "padding-left": "30px",
                "padding-right": "30px"
              },
              "quantityInput": {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px"
              },
              "title": {
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#006fe6"
                },
                "background-color": "#007bff",
                ":focus": {
                  "background-color": "#006fe6"
                },
                "border-radius": "4px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#007bff",
                ":hover": {
                  "background-color": "#006fe6"
                },
                ":focus": {
                  "background-color": "#006fe6"
                }
              },
              "count": {
                "font-size": "14px"
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/