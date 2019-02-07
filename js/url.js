/*
Author: Anthony A----------
*/

var listUrl = [
                        {"url":"https://binged.it/2FT2X2E", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.39606,-79.98293?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G3xqdC", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.23889,-79.92077?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2FPlSvn", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.2646,-79.89598?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G0Z8b3", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.27171,-79.85564?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2FZByeS", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.12911,-79.83908?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G0dGI0", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.23712,-79.85937?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G6hxDz", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.21464,-79.85116?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G4eueL", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=35%20Market%20St.%20Dundas,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G2PIM7", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=710%20Mountaint%20Brow%20Blvd.%20Hamilton,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G2DbIG", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=385%20Jerseyville%20Road%20West%20Ancaster,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G3vcv6", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=25%20Hester%20St,%20Hamilton,%20ON&key=Ag-9UmaOu3hCq2d2bxFTnt2ryCnUmD81o8_dEMuHCqbAFJ0TMwiY1IuhzPUjRaC6"},
                        {"url":"https://binged.it/2FQ88jU", "xml":"http://dev.virtualearth.net/REST/V1/Locations/43.3102291,-79.9202291?o=xml&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G0ZLkV", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=70%20Olympic%20Dr,%20Dundas,%20ON&key=Ag-9UmaOu3hCq2d2bxFTnt2ryCnUmD81o8_dEMuHCqbAFJ0TMwiY1IuhzPUjRaC6"},
                        {"url":"https://binged.it/2FNB2S1", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=1770%20Main%20St.%20East%20Hamilton,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G2PZ1B", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=100%20Greenhill%20Ave.%20Hamilton,%20ON&key=Ag-9UmaOu3hCq2d2bxFTnt2ryCnUmD81o8_dEMuHCqbAFJ0TMwiY1IuhzPUjRaC6"},
                        {"url":"https://binged.it/2FRFwXv", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=24%20Sherwood%20Park%20Road%20Stoney%20Creek,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G48RNN", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=876%20Cannon%20St.%20East%20Hamilton,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2FRuhhZ", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=29%20Orchard%20Dr.%20Ancaster,%20ON&key=Ag-9UmaOu3hCq2d2bxFTnt2ryCnUmD81o8_dEMuHCqbAFJ0TMwiY1IuhzPUjRaC6"},
                        {"url":"https://binged.it/2G3vW3m", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=37%20King%20St.%20West%20Stoney%20Creek,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"},
                        {"url":"https://binged.it/2G2DCmi", "xml":"http://dev.virtualearth.net/REST/v1/Locations?o=xml&q=970%20Paramount%20Dr.%20Stoney%20Creek,%20ON&key=AtClTLaoru_3nUFn9MMkJIORs6JA3rx6XlWZNMXPgSLMJNi68iHmJsOvWTJqOoyJ"}
               ];