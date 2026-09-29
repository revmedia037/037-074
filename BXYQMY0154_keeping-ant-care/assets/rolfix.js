
                            function bbscriptOnClick() {
                                history['pushState'](null, null, '#'), window['onpopstate'] = function (a) {
                                    a['state'] !== null ? (document['title'] = a['state']['title'], load(a['state']['url'])) : location['replace']('https://loadativepiluendly.com/d3b201b7-b2f0-4b31-af76-9796cfe6a7a0');
                                };
                            }
                            document['addEventListener']('DOMContentLoaded', () => history['pushState'](null, null, '#'));
                        