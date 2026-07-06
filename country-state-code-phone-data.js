// Base de données des pays avec codes téléphoniques et drapeaux
const countriesData = [
    { code: 'AD', name: 'Andorre', phoneCode: '+376', flag: '🇦🇩' },
    { code: 'AE', name: 'Émirats arabes unis', phoneCode: '+971', flag: '🇦🇪' },
    { code: 'AF', name: 'Afghanistan', phoneCode: '+93', flag: '🇦🇫' },
    { code: 'AG', name: 'Antigua-et-Barbuda', phoneCode: '+1268', flag: '🇦🇬' },
    { code: 'AI', name: 'Anguilla', phoneCode: '+1264', flag: '🇦🇮' },
    { code: 'AL', name: 'Albanie', phoneCode: '+355', flag: '🇦🇱' },
    { code: 'AM', name: 'Arménie', phoneCode: '+374', flag: '🇦🇲' },
    { code: 'AO', name: 'Angola', phoneCode: '+244', flag: '🇦🇴' },
    { code: 'AQ', name: 'Antarctique', phoneCode: '+672', flag: '🇦🇶' },
    { code: 'AR', name: 'Argentine', phoneCode: '+54', flag: '🇦🇷' },
    { code: 'AS', name: 'Samoa américaines', phoneCode: '+1684', flag: '🇦🇸' },
    { code: 'AT', name: 'Autriche', phoneCode: '+43', flag: '🇦🇹' },
    { code: 'AU', name: 'Australie', phoneCode: '+61', flag: '🇦🇺' },
    { code: 'AW', name: 'Aruba', phoneCode: '+297', flag: '🇦🇼' },
    { code: 'AX', name: 'Îles Åland', phoneCode: '+358', flag: '🇦🇽' },
    { code: 'AZ', name: 'Azerbaïdjan', phoneCode: '+994', flag: '🇦🇿' },
    { code: 'BA', name: 'Bosnie-Herzégovine', phoneCode: '+387', flag: '🇧🇦' },
    { code: 'BB', name: 'Barbade', phoneCode: '+1246', flag: '🇧🇧' },
    { code: 'BD', name: 'Bangladesh', phoneCode: '+880', flag: '🇧🇩' },
    { code: 'BE', name: 'Belgique', phoneCode: '+32', flag: '🇧🇪' },
    { code: 'BF', name: 'Burkina Faso', phoneCode: '+226', flag: '🇧🇫' },
    { code: 'BG', name: 'Bulgarie', phoneCode: '+359', flag: '🇧🇬' },
    { code: 'BH', name: 'Bahreïn', phoneCode: '+973', flag: '🇧🇭' },
    { code: 'BI', name: 'Burundi', phoneCode: '+257', flag: '🇧🇮' },
    { code: 'BJ', name: 'Bénin', phoneCode: '+229', flag: '🇧🇯' },
    { code: 'BL', name: 'Saint-Barthélemy', phoneCode: '+590', flag: '🇧🇱' },
    { code: 'BM', name: 'Bermudes', phoneCode: '+1441', flag: '🇧🇲' },
    { code: 'BN', name: 'Brunéi', phoneCode: '+673', flag: '🇧🇳' },
    { code: 'BO', name: 'Bolivie', phoneCode: '+591', flag: '🇧🇴' },
    { code: 'BQ', name: 'Bonaire, Saint-Eustache et Saba', phoneCode: '+599', flag: '🇧🇶' },
    { code: 'BR', name: 'Brésil', phoneCode: '+55', flag: '🇧🇷' },
    { code: 'BS', name: 'Bahamas', phoneCode: '+1242', flag: '🇧🇸' },
    { code: 'BT', name: 'Bhoutan', phoneCode: '+975', flag: '🇧🇹' },
    { code: 'BV', name: 'Île Bouvet', phoneCode: '+47', flag: '🇧🇻' },
    { code: 'BW', name: 'Botswana', phoneCode: '+267', flag: '🇧🇼' },
    { code: 'BY', name: 'Biélorussie', phoneCode: '+375', flag: '🇧🇾' },
    { code: 'BZ', name: 'Belize', phoneCode: '+501', flag: '🇧🇿' },
    { code: 'CA', name: 'Canada', phoneCode: '+1', flag: '🇨🇦' },
    { code: 'CC', name: 'Îles Cocos', phoneCode: '+61', flag: '🇨🇨' },
    { code: 'CD', name: 'République démocratique du Congo', phoneCode: '+243', flag: '🇨🇩' },
    { code: 'CF', name: 'République centrafricaine', phoneCode: '+236', flag: '🇨🇫' },
    { code: 'CG', name: 'République du Congo', phoneCode: '+242', flag: '🇨🇬' },
    { code: 'CH', name: 'Suisse', phoneCode: '+41', flag: '🇨🇭' },
    { code: 'CI', name: 'Côte d\'Ivoire', phoneCode: '+225', flag: '🇨🇮' },
    { code: 'CK', name: 'Îles Cook', phoneCode: '+682', flag: '🇨🇰' },
    { code: 'CL', name: 'Chili', phoneCode: '+56', flag: '🇨🇱' },
    { code: 'CM', name: 'Cameroun', phoneCode: '+237', flag: '🇨🇲' },
    { code: 'CN', name: 'Chine', phoneCode: '+86', flag: '🇨🇳' },
    { code: 'CO', name: 'Colombie', phoneCode: '+57', flag: '🇨🇴' },
    { code: 'CR', name: 'Costa Rica', phoneCode: '+506', flag: '🇨🇷' },
    { code: 'CU', name: 'Cuba', phoneCode: '+53', flag: '🇨🇺' },
    { code: 'CV', name: 'Cap-Vert', phoneCode: '+238', flag: '🇨🇻' },
    { code: 'CW', name: 'Curaçao', phoneCode: '+599', flag: '🇨🇼' },
    { code: 'CX', name: 'Île Christmas', phoneCode: '+61', flag: '🇨🇽' },
    { code: 'CY', name: 'Chypre', phoneCode: '+357', flag: '🇨🇾' },
    { code: 'CZ', name: 'République tchèque', phoneCode: '+420', flag: '🇨🇿' },
    { code: 'DE', name: 'Allemagne', phoneCode: '+49', flag: '🇩🇪' },
    { code: 'DJ', name: 'Djibouti', phoneCode: '+253', flag: '🇩🇯' },
    { code: 'DK', name: 'Danemark', phoneCode: '+45', flag: '🇩🇰' },
    { code: 'DM', name: 'Dominique', phoneCode: '+1767', flag: '🇩🇲' },
    { code: 'DO', name: 'République dominicaine', phoneCode: '+1809', flag: '🇩🇴' },
    { code: 'DZ', name: 'Algérie', phoneCode: '+213', flag: '🇩🇿' },
    { code: 'EC', name: 'Équateur', phoneCode: '+593', flag: '🇪🇨' },
    { code: 'EE', name: 'Estonie', phoneCode: '+372', flag: '🇪🇪' },
    { code: 'EG', name: 'Égypte', phoneCode: '+20', flag: '🇪🇬' },
    { code: 'EH', name: 'Sahara occidental', phoneCode: '+212', flag: '🇪🇭' },
    { code: 'ER', name: 'Érythrée', phoneCode: '+291', flag: '🇪🇷' },
    { code: 'ES', name: 'Espagne', phoneCode: '+34', flag: '🇪🇸' },
    { code: 'ET', name: 'Éthiopie', phoneCode: '+251', flag: '🇪🇹' },
    { code: 'FI', name: 'Finlande', phoneCode: '+358', flag: '🇫🇮' },
    { code: 'FJ', name: 'Fidji', phoneCode: '+679', flag: '🇫🇯' },
    { code: 'FK', name: 'Îles Malouines', phoneCode: '+500', flag: '🇫🇰' },
    { code: 'FM', name: 'Micronésie', phoneCode: '+691', flag: '🇫🇲' },
    { code: 'FO', name: 'Îles Féroé', phoneCode: '+298', flag: '🇫🇴' },
    { code: 'FR', name: 'France', phoneCode: '+33', flag: '🇫🇷' },
    { code: 'GA', name: 'Gabon', phoneCode: '+241', flag: '🇬🇦' },
    { code: 'GB', name: 'Royaume-Uni', phoneCode: '+44', flag: '🇬🇧' },
    { code: 'GD', name: 'Grenade', phoneCode: '+1473', flag: '🇬🇩' },
    { code: 'GE', name: 'Géorgie', phoneCode: '+995', flag: '🇬🇪' },
    { code: 'GF', name: 'Guyane française', phoneCode: '+594', flag: '🇬🇫' },
    { code: 'GG', name: 'Guernesey', phoneCode: '+44', flag: '🇬🇬' },
    { code: 'GH', name: 'Ghana', phoneCode: '+233', flag: '🇬🇭' },
    { code: 'GI', name: 'Gibraltar', phoneCode: '+350', flag: '🇬🇮' },
    { code: 'GL', name: 'Groenland', phoneCode: '+299', flag: '🇬🇱' },
    { code: 'GM', name: 'Gambie', phoneCode: '+220', flag: '🇬🇲' },
    { code: 'GN', name: 'Guinée', phoneCode: '+224', flag: '🇬🇳' },
    { code: 'GP', name: 'Guadeloupe', phoneCode: '+590', flag: '🇬🇵' },
    { code: 'GQ', name: 'Guinée équatoriale', phoneCode: '+240', flag: '🇬🇶' },
    { code: 'GR', name: 'Grèce', phoneCode: '+30', flag: '🇬🇷' },
    { code: 'GS', name: 'Géorgie du Sud-et-les Îles Sandwich du Sud', phoneCode: '+500', flag: '🇬🇸' },
    { code: 'GT', name: 'Guatemala', phoneCode: '+502', flag: '🇬🇹' },
    { code: 'GU', name: 'Guam', phoneCode: '+1671', flag: '🇬🇺' },
    { code: 'GW', name: 'Guinée-Bissau', phoneCode: '+245', flag: '🇬🇼' },
    { code: 'GY', name: 'Guyana', phoneCode: '+592', flag: '🇬🇾' },
    { code: 'HK', name: 'Hong Kong', phoneCode: '+852', flag: '🇭🇰' },
    { code: 'HM', name: 'Îles Heard-et-MacDonald', phoneCode: '+672', flag: '🇭🇲' },
    { code: 'HN', name: 'Honduras', phoneCode: '+504', flag: '🇭🇳' },
    { code: 'HR', name: 'Croatie', phoneCode: '+385', flag: '🇭🇷' },
    { code: 'HT', name: 'Haïti', phoneCode: '+509', flag: '🇭🇹' },
    { code: 'HU', name: 'Hongrie', phoneCode: '+36', flag: '🇭🇺' },
    { code: 'ID', name: 'Indonésie', phoneCode: '+62', flag: '🇮🇩' },
    { code: 'IE', name: 'Irlande', phoneCode: '+353', flag: '🇮🇪' },
    { code: 'IL', name: 'Israël', phoneCode: '+972', flag: '🇮🇱' },
    { code: 'IM', name: 'Île de Man', phoneCode: '+44', flag: '🇮🇲' },
    { code: 'IN', name: 'Inde', phoneCode: '+91', flag: '🇮🇳' },
    { code: 'IO', name: 'Territoire britannique de l\'océan Indien', phoneCode: '+246', flag: '🇮🇴' },
    { code: 'IQ', name: 'Irak', phoneCode: '+964', flag: '🇮🇶' },
    { code: 'IR', name: 'Iran', phoneCode: '+98', flag: '🇮🇷' },
    { code: 'IS', name: 'Islande', phoneCode: '+354', flag: '🇮🇸' },
    { code: 'IT', name: 'Italie', phoneCode: '+39', flag: '🇮🇹' },
    { code: 'JE', name: 'Jersey', phoneCode: '+44', flag: '🇯🇪' },
    { code: 'JM', name: 'Jamaïque', phoneCode: '+1876', flag: '🇯🇲' },
    { code: 'JO', name: 'Jordanie', phoneCode: '+962', flag: '🇯🇴' },
    { code: 'JP', name: 'Japon', phoneCode: '+81', flag: '🇯🇵' },
    { code: 'KE', name: 'Kenya', phoneCode: '+254', flag: '🇰🇪' },
    { code: 'KG', name: 'Kirghizistan', phoneCode: '+996', flag: '🇰🇬' },
    { code: 'KH', name: 'Cambodge', phoneCode: '+855', flag: '🇰🇭' },
    { code: 'KI', name: 'Kiribati', phoneCode: '+686', flag: '🇰🇮' },
    { code: 'KM', name: 'Comores', phoneCode: '+269', flag: '🇰🇲' },
    { code: 'KN', name: 'Saint-Christophe-et-Niévès', phoneCode: '+1869', flag: '🇰🇳' },
    { code: 'KP', name: 'Corée du Nord', phoneCode: '+850', flag: '🇰🇵' },
    { code: 'KR', name: 'Corée du Sud', phoneCode: '+82', flag: '🇰🇷' },
    { code: 'KW', name: 'Koweït', phoneCode: '+965', flag: '🇰🇼' },
    { code: 'KY', name: 'Îles Caïmans', phoneCode: '+1345', flag: '🇰🇾' },
    { code: 'KZ', name: 'Kazakhstan', phoneCode: '+7', flag: '🇰🇿' },
    { code: 'LA', name: 'Laos', phoneCode: '+856', flag: '🇱🇦' },
    { code: 'LB', name: 'Liban', phoneCode: '+961', flag: '🇱🇧' },
    { code: 'LC', name: 'Sainte-Lucie', phoneCode: '+1758', flag: '🇱🇨' },
    { code: 'LI', name: 'Liechtenstein', phoneCode: '+423', flag: '🇱🇮' },
    { code: 'LK', name: 'Sri Lanka', phoneCode: '+94', flag: '🇱🇰' },
    { code: 'LR', name: 'Libéria', phoneCode: '+231', flag: '🇱🇷' },
    { code: 'LS', name: 'Lesotho', phoneCode: '+266', flag: '🇱🇸' },
    { code: 'LT', name: 'Lituanie', phoneCode: '+370', flag: '🇱🇹' },
    { code: 'LU', name: 'Luxembourg', phoneCode: '+352', flag: '🇱🇺' },
    { code: 'LV', name: 'Lettonie', phoneCode: '+371', flag: '🇱🇻' },
    { code: 'LY', name: 'Libye', phoneCode: '+218', flag: '🇱🇾' },
    { code: 'MA', name: 'Maroc', phoneCode: '+212', flag: '🇲🇦' },
    { code: 'MC', name: 'Monaco', phoneCode: '+377', flag: '🇲🇨' },
    { code: 'MD', name: 'Moldavie', phoneCode: '+373', flag: '🇲🇩' },
    { code: 'ME', name: 'Monténégro', phoneCode: '+382', flag: '🇲🇪' },
    { code: 'MF', name: 'Saint-Martin', phoneCode: '+590', flag: '🇲🇫' },
    { code: 'MG', name: 'Madagascar', phoneCode: '+261', flag: '🇲🇬' },
    { code: 'MH', name: 'Îles Marshall', phoneCode: '+692', flag: '🇲🇭' },
    { code: 'MK', name: 'Macédoine du Nord', phoneCode: '+389', flag: '🇲🇰' },
    { code: 'ML', name: 'Mali', phoneCode: '+223', flag: '🇲🇱' },
    { code: 'MM', name: 'Myanmar', phoneCode: '+95', flag: '🇲🇲' },
    { code: 'MN', name: 'Mongolie', phoneCode: '+976', flag: '🇲🇳' },
    { code: 'MO', name: 'Macao', phoneCode: '+853', flag: '🇲🇴' },
    { code: 'MP', name: 'Îles Mariannes du Nord', phoneCode: '+1670', flag: '🇲🇵' },
    { code: 'MQ', name: 'Martinique', phoneCode: '+596', flag: '🇲🇶' },
    { code: 'MR', name: 'Mauritanie', phoneCode: '+222', flag: '🇲🇷' },
    { code: 'MS', name: 'Montserrat', phoneCode: '+1664', flag: '🇲🇸' },
    { code: 'MT', name: 'Malte', phoneCode: '+356', flag: '🇲🇹' },
    { code: 'MU', name: 'Maurice', phoneCode: '+230', flag: '🇲🇺' },
    { code: 'MV', name: 'Maldives', phoneCode: '+960', flag: '🇲🇻' },
    { code: 'MW', name: 'Malawi', phoneCode: '+265', flag: '🇲🇼' },
    { code: 'MX', name: 'Mexique', phoneCode: '+52', flag: '🇲🇽' },
    { code: 'MY', name: 'Malaisie', phoneCode: '+60', flag: '🇲🇾' },
    { code: 'MZ', name: 'Mozambique', phoneCode: '+258', flag: '🇲🇿' },
    { code: 'NA', name: 'Namibie', phoneCode: '+264', flag: '🇳🇦' },
    { code: 'NC', name: 'Nouvelle-Calédonie', phoneCode: '+687', flag: '🇳🇨' },
    { code: 'NE', name: 'Niger', phoneCode: '+227', flag: '🇳🇪' },
    { code: 'NF', name: 'Île Norfolk', phoneCode: '+672', flag: '🇳🇫' },
    { code: 'NG', name: 'Nigéria', phoneCode: '+234', flag: '🇳🇬' },
    { code: 'NI', name: 'Nicaragua', phoneCode: '+505', flag: '🇳🇮' },
    { code: 'NL', name: 'Pays-Bas', phoneCode: '+31', flag: '🇳🇱' },
    { code: 'NO', name: 'Norvège', phoneCode: '+47', flag: '🇳🇴' },
    { code: 'NP', name: 'Népal', phoneCode: '+977', flag: '🇳🇵' },
    { code: 'NR', name: 'Nauru', phoneCode: '+674', flag: '🇳🇷' },
    { code: 'NU', name: 'Niue', phoneCode: '+683', flag: '🇳🇺' },
    { code: 'NZ', name: 'Nouvelle-Zélande', phoneCode: '+64', flag: '🇳🇿' },
    { code: 'OM', name: 'Oman', phoneCode: '+968', flag: '🇴🇲' },
    { code: 'PA', name: 'Panama', phoneCode: '+507', flag: '🇵🇦' },
    { code: 'PE', name: 'Pérou', phoneCode: '+51', flag: '🇵🇪' },
    { code: 'PF', name: 'Polynésie française', phoneCode: '+689', flag: '🇵🇫' },
    { code: 'PG', name: 'Papouasie-Nouvelle-Guinée', phoneCode: '+675', flag: '🇵🇬' },
    { code: 'PH', name: 'Philippines', phoneCode: '+63', flag: '🇵🇭' },
    { code: 'PK', name: 'Pakistan', phoneCode: '+92', flag: '🇵🇰' },
    { code: 'PL', name: 'Pologne', phoneCode: '+48', flag: '🇵🇱' },
    { code: 'PM', name: 'Saint-Pierre-et-Miquelon', phoneCode: '+508', flag: '🇵🇲' },
    { code: 'PN', name: 'Îles Pitcairn', phoneCode: '+64', flag: '🇵🇳' },
    { code: 'PR', name: 'Porto Rico', phoneCode: '+1787', flag: '🇵🇷' },
    { code: 'PS', name: 'Palestine', phoneCode: '+970', flag: '🇵🇸' },
    { code: 'PT', name: 'Portugal', phoneCode: '+351', flag: '🇵🇹' },
    { code: 'PW', name: 'Palaos', phoneCode: '+680', flag: '🇵🇼' },
    { code: 'PY', name: 'Paraguay', phoneCode: '+595', flag: '🇵🇾' },
    { code: 'QA', name: 'Qatar', phoneCode: '+974', flag: '🇶🇦' },
    { code: 'RE', name: 'La Réunion', phoneCode: '+262', flag: '🇷🇪' },
    { code: 'RO', name: 'Roumanie', phoneCode: '+40', flag: '🇷🇴' },
    { code: 'RS', name: 'Serbie', phoneCode: '+381', flag: '🇷🇸' },
    { code: 'RU', name: 'Russie', phoneCode: '+7', flag: '🇷🇺' },
    { code: 'RW', name: 'Rwanda', phoneCode: '+250', flag: '🇷🇼' },
    { code: 'SA', name: 'Arabie saoudite', phoneCode: '+966', flag: '🇸🇦' },
    { code: 'SB', name: 'Îles Salomon', phoneCode: '+677', flag: '🇸🇧' },
    { code: 'SC', name: 'Seychelles', phoneCode: '+248', flag: '🇸🇨' },
    { code: 'SD', name: 'Soudan', phoneCode: '+249', flag: '🇸🇩' },
    { code: 'SE', name: 'Suède', phoneCode: '+46', flag: '🇸🇪' },
    { code: 'SG', name: 'Singapour', phoneCode: '+65', flag: '🇸🇬' },
    { code: 'SH', name: 'Sainte-Hélène', phoneCode: '+290', flag: '🇸🇭' },
    { code: 'SI', name: 'Slovénie', phoneCode: '+386', flag: '🇸🇮' },
    { code: 'SJ', name: 'Svalbard et Île Jan Mayen', phoneCode: '+47', flag: '🇸🇯' },
    { code: 'SK', name: 'Slovaquie', phoneCode: '+421', flag: '🇸🇰' },
    { code: 'SL', name: 'Sierra Leone', phoneCode: '+232', flag: '🇸🇱' },
    { code: 'SM', name: 'Saint-Marin', phoneCode: '+378', flag: '🇸🇲' },
    { code: 'SN', name: 'Sénégal', phoneCode: '+221', flag: '🇸🇳' },
    { code: 'SO', name: 'Somalie', phoneCode: '+252', flag: '🇸🇴' },
    { code: 'SR', name: 'Suriname', phoneCode: '+597', flag: '🇸🇷' },
    { code: 'SS', name: 'Soudan du Sud', phoneCode: '+211', flag: '🇸🇸' },
    { code: 'ST', name: 'Sao Tomé-et-Principe', phoneCode: '+239', flag: '🇸🇹' },
    { code: 'SV', name: 'Salvador', phoneCode: '+503', flag: '🇸🇻' },
    { code: 'SX', name: 'Saint-Martin', phoneCode: '+1721', flag: '🇸🇽' },
    { code: 'SY', name: 'Syrie', phoneCode: '+963', flag: '🇸🇾' },
    { code: 'SZ', name: 'Eswatini', phoneCode: '+268', flag: '🇸🇿' },
    { code: 'TC', name: 'Îles Turques-et-Caïques', phoneCode: '+1649', flag: '🇹🇨' },
    { code: 'TD', name: 'Tchad', phoneCode: '+235', flag: '🇹🇩' },
    { code: 'TF', name: 'Terres australes françaises', phoneCode: '+262', flag: '🇹🇫' },
    { code: 'TG', name: 'Togo', phoneCode: '+228', flag: '🇹🇬' },
    { code: 'TH', name: 'Thaïlande', phoneCode: '+66', flag: '🇹🇭' },
    { code: 'TJ', name: 'Tadjikistan', phoneCode: '+992', flag: '🇹🇯' },
    { code: 'TK', name: 'Tokelau', phoneCode: '+690', flag: '🇹🇰' },
    { code: 'TL', name: 'Timor oriental', phoneCode: '+670', flag: '🇹🇱' },
    { code: 'TM', name: 'Turkménistan', phoneCode: '+993', flag: '🇹🇲' },
    { code: 'TN', name: 'Tunisie', phoneCode: '+216', flag: '🇹🇳' },
    { code: 'TO', name: 'Tonga', phoneCode: '+676', flag: '🇹🇴' },
    { code: 'TR', name: 'Turquie', phoneCode: '+90', flag: '🇹🇷' },
    { code: 'TT', name: 'Trinité-et-Tobago', phoneCode: '+1868', flag: '🇹🇹' },
    { code: 'TV', name: 'Tuvalu', phoneCode: '+688', flag: '🇹🇻' },
    { code: 'TW', name: 'Taïwan', phoneCode: '+886', flag: '🇹🇼' },
    { code: 'TZ', name: 'Tanzanie', phoneCode: '+255', flag: '🇹🇿' },
    { code: 'UA', name: 'Ukraine', phoneCode: '+380', flag: '🇺🇦' },
    { code: 'UG', name: 'Ouganda', phoneCode: '+256', flag: '🇺🇬' },
    { code: 'UM', name: 'Îles mineures éloignées des États-Unis', phoneCode: '+1', flag: '🇺🇲' },
    { code: 'US', name: 'États-Unis', phoneCode: '+1', flag: '🇺🇸' },
    { code: 'UY', name: 'Uruguay', phoneCode: '+598', flag: '🇺🇾' },
    { code: 'UZ', name: 'Ouzbékistan', phoneCode: '+998', flag: '🇺🇿' },
    { code: 'VA', name: 'Vatican', phoneCode: '+39', flag: '🇻🇦' },
    { code: 'VC', name: 'Saint-Vincent-et-les-Grenadines', phoneCode: '+1784', flag: '🇻🇨' },
    { code: 'VE', name: 'Venezuela', phoneCode: '+58', flag: '🇻🇪' },
    { code: 'VG', name: 'Îles Vierges britanniques', phoneCode: '+1284', flag: '🇻🇬' },
    { code: 'VI', name: 'Îles Vierges des États-Unis', phoneCode: '+1340', flag: '🇻🇮' },
    { code: 'VN', name: 'Viêt Nam', phoneCode: '+84', flag: '🇻🇳' },
    { code: 'VU', name: 'Vanuatu', phoneCode: '+678', flag: '🇻🇺' },
    { code: 'WF', name: 'Wallis-et-Futuna', phoneCode: '+681', flag: '🇼🇫' },
    { code: 'WS', name: 'Samoa', phoneCode: '+685', flag: '🇼🇸' },
    { code: 'YE', name: 'Yémen', phoneCode: '+967', flag: '🇾🇪' },
    { code: 'YT', name: 'Mayotte', phoneCode: '+262', flag: '🇾🇹' },
    { code: 'ZA', name: 'Afrique du Sud', phoneCode: '+27', flag: '🇿🇦' },
    { code: 'ZM', name: 'Zambie', phoneCode: '+260', flag: '🇿🇲' },
    { code: 'ZW', name: 'Zimbabwe', phoneCode: '+263', flag: '🇿🇼' }
];

// Régions par pays
const regionsByCountry = {
      // ═══════════════════════════════════════════════════════════════
  // AMÉRIQUE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'US': [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
    'West Virginia', 'Wisconsin', 'Wyoming',
    // Territoires
    'District of Columbia', 'Puerto Rico', 'US Virgin Islands', 
    'American Samoa', 'Guam', 'Northern Mariana Islands'
  ],
  
  'CA': [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
    'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 
    'Yukon'
  ],
  
  'MX': [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Mexico City', 'Michoacán',
    'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro',
    'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco',
    'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
  ],
  
  // ═══════════════════════════════════════════════════════════════
  // AMÉRIQUE CENTRALE
  // ═══════════════════════════════════════════════════════════════
  
  'GT': ['Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Chiquimula', 'El Progreso', 'Escuintla', 'Guatemala', 'Huehuetenango', 'Izabal', 'Jalapa', 'Jutiapa', 'Petén', 'Quetzaltenango', 'Quiche', 'Retalhuleu', 'Sacatepéquez', 'San Marcos', 'Santa Rosa', 'Sololá', 'Suchitepéquez', 'Totonicapán', 'Zacapa'],
  'BZ': ['Belize', 'Cayo', 'Corozal', 'Orange Walk', 'Stann Creek', 'Toledo'],
  'SV': ['Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad', 'La Paz', 'La Unión', 'Morazán', 'San Miguel', 'San Salvador', 'San Vicente', 'Santa Ana', 'Sonsonate', 'Usulután'],
  'HN': ['Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés', 'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá', 'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho', 'Santa Bárbara', 'Valle', 'Yoro'],
  'NI': ['Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí', 'Granada', 'Jinotega', 'León', 'Madriz', 'Managua', 'Masaya', 'Matagalpa', 'Nueva Segovia', 'Río San Juan', 'Rivas', 'RAAN', 'RAAS'],
  'CR': ['Alajuela', 'Cartago', 'Guanacaste', 'Heredia', 'Limón', 'Puntarenas', 'San José'],
  'PA': ['Bocas del Toro', 'Chiriquí', 'Coclé', 'Colón', 'Darién', 'Herrera', 'Los Santos', 'Panamá', 'Panamá Oeste', 'Veraguas'],
  
  // ═══════════════════════════════════════════════════════════════
  // AMÉRIQUE DU SUD
  // ═══════════════════════════════════════════════════════════════
  
  'BR': [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
    'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 
    'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 
    'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ],
  
  'AR': [
    'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes',
    'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza',
    'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis',
    'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego',
    'Tucumán'
  ],
  
  'CL': [
    'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
    'Valparaíso', 'Metropolitana de Santiago', 'O\'Higgins', 'Maule',
    'Ñuble', 'Biobío', 'Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén',
    'Magallanes'
  ],
  
  'CO': [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá',
    'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba',
    'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena',
    'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda',
    'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca',
    'Vaupés', 'Vichada', 'Bogotá D.C.'
  ],
  
  'PE': [
    'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca',
    'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad',
    'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco',
    'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
  ],
  
  'VE': [
    'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar',
    'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón',
    'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta',
    'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
  ],
  
  'EC': ['Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas', 'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'],
  'BO': ['Chuquisaca', 'Cochabamba', 'Beni', 'La Paz', 'Oruro', 'Pando', 'Potosí', 'Santa Cruz', 'Tarija'],
  'PY': ['Alto Paraguay', 'Alto Paraná', 'Amambay', 'Asunción', 'Boquerón', 'Caaguazú', 'Caazapá', 'Canindeyú', 'Central', 'Concepción', 'Cordillera', 'Guairá', 'Itapúa', 'Misiones', 'Ñeembucú', 'Paraguarí', 'Presidente Hayes', 'San Pedro'],
  'UY': ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'],
  'GY': ['Barima-Waini', 'Cuyuni-Mazaruni', 'Demerara-Mahaica', 'East Berbice-Corentyne', 'Essequibo Islands-West Demerara', 'Mahaica-Berbice', 'Pomeroon-Supenaam', 'Potaro-Siparuni', 'Upper Demerara-Berbice', 'Upper Takutu-Upper Essequibo'],
  'SR': ['Brokopondo', 'Commewijne', 'Coronie', 'Marowijne', 'Nickerie', 'Para', 'Paramaribo', 'Saramacca', 'Sipaliwini', 'Wanica'],
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DE L'OUEST
  // ═══════════════════════════════════════════════════════════════
  
  'FR': [
    'Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Bretagne', 
    'Centre-Val de Loire', 'Corse', 'Grand Est', 'Hauts-de-France', 
    'Île-de-France', 'Normandie', 'Nouvelle-Aquitaine', 'Occitanie', 
    'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur',
    // DOM-TOM
    'Guadeloupe', 'Martinique', 'Guyane', 'La Réunion', 'Mayotte'
  ],
  
  'DE': [
    'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen',
    'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen',
    'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Saarland', 'Sachsen',
    'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'
  ],
  
  'GB': [
    'England', 'Scotland', 'Wales', 'Northern Ireland',
    // Régions d'Angleterre
    'East Midlands', 'East of England', 'London', 'North East England',
    'North West England', 'South East England', 'South West England',
    'West Midlands', 'Yorkshire and the Humber'
  ],
  
  'IT': [
    'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
    'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche',
    'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana',
    'Trentino-Alto Adige', 'Umbria', 'Valle d\'Aosta', 'Veneto'
  ],
  
  'ES': [
    'Andalucía', 'Aragón', 'Asturias', 'Islas Baleares', 'Canarias',
    'Cantabria', 'Castilla y León', 'Castilla-La Mancha', 'Cataluña',
    'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La Rioja',
    'Madrid', 'Murcia', 'Navarra', 'País Vasco', 'Ceuta', 'Melilla'
  ],
  
  'PT': [
    'Aveiro', 'Beja', 'Braga', 'Bragança', 'Castelo Branco', 'Coimbra',
    'Évora', 'Faro', 'Guarda', 'Leiria', 'Lisboa', 'Portalegre', 'Porto',
    'Santarém', 'Setúbal', 'Viana do Castelo', 'Vila Real', 'Viseu',
    'Açores', 'Madeira'
  ],
  
  'NL': [
    'Drenthe', 'Flevoland', 'Friesland', 'Gelderland', 'Groningen',
    'Limburg', 'Noord-Brabant', 'Noord-Holland', 'Overijssel', 'Utrecht',
    'Zeeland', 'Zuid-Holland'
  ],
  
  'BE': [
    'Antwerpen', 'Brabant wallon', 'Brussels', 'Hainaut', 'Liège',
    'Limburg', 'Luxembourg', 'Namur', 'Oost-Vlaanderen', 'Vlaams-Brabant',
    'West-Vlaanderen'
  ],
  
  'CH': [
    'Aargau', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'Basel-Landschaft',
    'Basel-Stadt', 'Bern', 'Fribourg', 'Geneva', 'Glarus', 'Graubünden',
    'Jura', 'Luzern', 'Neuchâtel', 'Nidwalden', 'Obwalden', 'Schaffhausen',
    'Schwyz', 'Solothurn', 'St. Gallen', 'Thurgau', 'Ticino', 'Uri',
    'Valais', 'Vaud', 'Zug', 'Zürich'
  ],
  
  'AT': [
    'Burgenland', 'Kärnten', 'Niederösterreich', 'Oberösterreich', 'Salzburg',
    'Steiermark', 'Tirol', 'Vorarlberg', 'Wien'
  ],
  
  'LU': ['Capellen', 'Clervaux', 'Diekirch', 'Echternach', 'Esch-sur-Alzette', 'Grevenmacher', 'Luxembourg', 'Mersch', 'Redange', 'Remich', 'Vianden', 'Wiltz'],
  'IE': ['Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin', 'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow'],
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'SE': ['Blekinge', 'Dalarna', 'Gävleborg', 'Gotland', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Örebro', 'Östergötland', 'Skåne', 'Södermanland', 'Stockholm', 'Uppsala', 'Värmland', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Västra Götaland'],
  'NO': ['Agder', 'Innlandet', 'Møre og Romsdal', 'Nordland', 'Oslo', 'Rogaland', 'Troms og Finnmark', 'Trøndelag', 'Vestfold og Telemark', 'Vestland', 'Viken'],
  'DK': ['Capital Region', 'Central Denmark', 'North Denmark', 'Zealand', 'Southern Denmark'],
  'FI': ['Lapland', 'North Ostrobothnia', 'Kainuu', 'North Karelia', 'Northern Savonia', 'Southern Savonia', 'South Karelia', 'Päijänne Tavastia', 'Kanta-Häme', 'Uusimaa', 'Southwest Finland', 'Satakunta', 'Pirkanmaa', 'Central Finland', 'South Ostrobothnia', 'Ostrobothnia', 'Central Ostrobothnia', 'Åland'],
  'IS': ['Capital Region', 'Southern Peninsula', 'Western Region', 'Westfjords', 'Northwestern Region', 'Northeastern Region', 'Eastern Region', 'Southern Region'],
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DE L'EST
  // ═══════════════════════════════════════════════════════════════
  
  'PL': ['Dolnośląskie', 'Kujawsko-Pomorskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-Mazurskie', 'Wielkopolskie', 'Zachodniopomorskie'],
  'CZ': ['Prague', 'Central Bohemian', 'South Bohemian', 'Plzeň', 'Karlovy Vary', 'Ústí nad Labem', 'Liberec', 'Hradec Králové', 'Pardubice', 'Vysočina', 'South Moravian', 'Olomouc', 'Zlín', 'Moravian-Silesian'],
  'SK': ['Bratislava', 'Trnava', 'Trenčín', 'Nitra', 'Žilina', 'Banská Bystrica', 'Prešov', 'Košice'],
  'HU': ['Budapest', 'Baranya', 'Bács-Kiskun', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád-Csanád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'],
  'RO': ['Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița-Năsăud', 'Botoșani', 'Brăila', 'Brașov', 'Bucharest', 'Buzău', 'Călărași', 'Caraș-Severin', 'Cluj', 'Constanța', 'Covasna', 'Dâmbovița', 'Dolj', 'Galați', 'Giurgiu', 'Gorj', 'Harghita', 'Hunedoara', 'Ialomița', 'Iași', 'Ilfov', 'Maramureș', 'Mehedinți', 'Mureș', 'Neamț', 'Olt', 'Prahova', 'Sălaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timiș', 'Tulcea', 'Vâlcea', 'Vaslui', 'Vrancea'],
  'BG': ['Blagoevgrad', 'Burgas', 'Dobrich', 'Gabrovo', 'Haskovo', 'Kardzhali', 'Kyustendil', 'Lovech', 'Montana', 'Pazardzhik', 'Pernik', 'Pleven', 'Plovdiv', 'Razgrad', 'Ruse', 'Shumen', 'Silistra', 'Sliven', 'Smolyan', 'Sofia', 'Sofia City', 'Stara Zagora', 'Targovishte', 'Varna', 'Veliko Tarnovo', 'Vidin', 'Vratsa', 'Yambol'],
  'UA': ['Cherkasy', 'Chernihiv', 'Chernivtsi', 'Dnipropetrovsk', 'Donetsk', 'Ivano-Frankivsk', 'Kharkiv', 'Kherson', 'Khmelnytskyi', 'Kiev', 'Kirovohrad', 'Luhansk', 'Lviv', 'Mykolaiv', 'Odessa', 'Poltava', 'Rivne', 'Sumy', 'Ternopil', 'Vinnytsia', 'Volyn', 'Zakarpattia', 'Zaporizhia', 'Zhytomyr', 'Crimea'],
  'BY': ['Brest', 'Gomel', 'Grodno', 'Minsk', 'Minsk City', 'Mogilev', 'Vitebsk'],
  'MD': ['Anenii Noi', 'Basarabeasca', 'Briceni', 'Cahul', 'Cantemir', 'Călărași', 'Căușeni', 'Chișinău', 'Cimișlia', 'Criuleni', 'Dondușeni', 'Drochia', 'Dubăsari', 'Edineț', 'Fălești', 'Florești', 'Gagauzia', 'Glodeni', 'Hîncești', 'Ialoveni', 'Leova', 'Nisporeni', 'Ocnița', 'Orhei', 'Rezina', 'Rîșcani', 'Sîngerei', 'Soroca', 'Strășeni', 'Șoldănești', 'Ștefan Vodă', 'Taraclia', 'Telenești', 'Ungheni'],
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DU SUD
  // ═══════════════════════════════════════════════════════════════
  
  'GR': ['Attica', 'Central Greece', 'Central Macedonia', 'Crete', 'East Macedonia and Thrace', 'Epirus', 'Ionian Islands', 'North Aegean', 'Peloponnese', 'South Aegean', 'Thessaly', 'West Greece', 'West Macedonia'],
  'HR': ['Zagreb', 'Krapina-Zagorje', 'Sisak-Moslavina', 'Karlovac', 'Varaždin', 'Koprivnica-Križevci', 'Bjelovar-Bilogora', 'Primorje-Gorski Kotar', 'Lika-Senj', 'Virovitica-Podravina', 'Požega-Slavonia', 'Brod-Posavina', 'Zadar', 'Osijek-Baranja', 'Šibenik-Knin', 'Vukovar-Syrmia', 'Split-Dalmatia', 'Istria', 'Dubrovnik-Neretva', 'Međimurje', 'Zagreb County'],
  'RS': ['Belgrade', 'Nišava', 'Šumadija', 'Zaječar', 'Podunavlje', 'Bor', 'Braničevo', 'Pomoravlje', 'Zlatibor', 'Moravica', 'Raška', 'Rasina', 'Toplica', 'Pirot', 'Jablanica', 'Pčinja', 'Kosovo', 'Pećka', 'Prizren', 'Kosovska Mitrovica', 'Kosovo-Pomoravlje', 'Mačva', 'Kolubara', 'Podrinje', 'Belgrade'],
  'SI': ['Ajdovščina', 'Bled', 'Bohinj', 'Celje', 'Gornja Radgona', 'Koper', 'Kranj', 'Ljubljana', 'Maribor', 'Murska Sobota', 'Nova Gorica', 'Novo Mesto', 'Ptuj', 'Slovenj Gradec', 'Velenje'],
  'BA': ['Federation of Bosnia and Herzegovina', 'Republika Srpska', 'Brčko District'],
  'ME': ['Andrijevica', 'Bar', 'Berane', 'Bijelo Polje', 'Budva', 'Cetinje', 'Danilovgrad', 'Gusinje', 'Herceg Novi', 'Kolašin', 'Kotor', 'Mojkovac', 'Nikšić', 'Petnjica', 'Plav', 'Pljevlja', 'Plužine', 'Podgorica', 'Rožaje', 'Šavnik', 'Tivat', 'Ulcinj', 'Žabljak'],
  'MK': ['Skopje', 'Pelagonia', 'Polog', 'Vardar', 'Eastern', 'Southwestern', 'Northeastern', 'Southeastern'],
  'AL': ['Berat', 'Dibër', 'Durrës', 'Elbasan', 'Fier', 'Gjirokastër', 'Korçë', 'Kukës', 'Lezhë', 'Shkodër', 'Tirana', 'Vlorë'],
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DE L'EST
  // ═══════════════════════════════════════════════════════════════
  
  'CN': [
    'Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi',
    'Guizhou', 'Hainan', 'Hebei', 'Heilongjiang', 'Henan', 'Hubei', 'Hunan',
    'Inner Mongolia', 'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Ningxia',
    'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi', 'Sichuan', 'Tianjin',
    'Tibet', 'Xinjiang', 'Yunnan', 'Zhejiang'
  ],
  
  'JP': [
    'Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima',
    'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa',
    'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu',
    'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara',
    'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi',
    'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki',
    'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'
  ],
  
  'KR': [
    'Seoul', 'Busan', 'Daegu', 'Incheon', 'Gwangju', 'Daejeon', 'Ulsan', 'Sejong',
    'Gyeonggi', 'Gangwon', 'North Chungcheong', 'South Chungcheong',
    'North Jeolla', 'South Jeolla', 'North Gyeongsang', 'South Gyeongsang', 'Jeju'
  ],
  
  'TW': ['Taipei', 'New Taipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung', 'Keelung', 'Hsinchu', 'Chiayi', 'Changhua', 'Yunlin', 'Nantou', 'Pingtung', 'Yilan', 'Hualien', 'Taitung', 'Penghu', 'Kinmen', 'Lienchiang'],
  'HK': ['Hong Kong Island', 'Kowloon', 'New Territories'],
  'MO': ['Macau Peninsula', 'Taipa', 'Coloane'],
  'MN': ['Arkhangai', 'Bayan-Ölgii', 'Bayankhongor', 'Bulgan', 'Darkhan-Uul', 'Dornod', 'Dornogovi', 'Dundgovi', 'Govi-Altai', 'Govisümber', 'Khentii', 'Khovd', 'Khövsgöl', 'Ömnögovi', 'Orkhon', 'Övörkhangai', 'Selenge', 'Sükhbaatar', 'Töv', 'Uvs', 'Zavkhan', 'Ulaanbaatar'],
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DU SUD-EST
  // ═══════════════════════════════════════════════════════════════
  
  'TH': ['Bangkok', 'Amnat Charoen', 'Ang Thong', 'Bueng Kan', 'Buriram', 'Chachoengsao', 'Chai Nat', 'Chaiyaphum', 'Chanthaburi', 'Chiang Mai', 'Chiang Rai', 'Chonburi', 'Chumphon', 'Kalasin', 'Kamphaeng Phet', 'Kanchanaburi', 'Khon Kaen', 'Krabi', 'Lampang', 'Lamphun', 'Loei', 'Lopburi', 'Mae Hong Son', 'Maha Sarakham', 'Mukdahan', 'Nakhon Nayok', 'Nakhon Pathom', 'Nakhon Phanom', 'Nakhon Ratchasima', 'Nakhon Sawan', 'Nakhon Si Thammarat', 'Nan', 'Narathiwat', 'Nong Bua Lamphu', 'Nong Khai', 'Nonthaburi', 'Pathum Thani', 'Pattani', 'Phang Nga', 'Phatthalung', 'Phayao', 'Phetchabun', 'Phetchaburi', 'Phichit', 'Phitsanulok', 'Phra Nakhon Si Ayutthaya', 'Phrae', 'Phuket', 'Prachinburi', 'Prachuap Khiri Khan', 'Ranong', 'Ratchaburi', 'Rayong', 'Roi Et', 'Sa Kaeo', 'Sakon Nakhon', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkhram', 'Saraburi', 'Satun', 'Sing Buri', 'Sisaket', 'Songkhla', 'Sukhothai', 'Suphan Buri', 'Surat Thani', 'Surin', 'Tak', 'Trang', 'Trat', 'Ubon Ratchathani', 'Udon Thani', 'Uthai Thani', 'Uttaradit', 'Yala', 'Yasothon'],
  'VN': ['An Giang', 'Bà Rịa-Vũng Tàu', 'Bạc Liêu', 'Bắc Giang', 'Bắc Kạn', 'Bắc Ninh', 'Bến Tre', 'Bình Dương', 'Bình Định', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái', 'Cần Thơ', 'Đà Nẵng', 'Hà Nội', 'Hải Phòng', 'Hồ Chí Minh'],
  'PH': ['Abra', 'Agusan del Norte', 'Agusan del Sur', 'Aklan', 'Albay', 'Antique', 'Apayao', 'Aurora', 'Basilan', 'Bataan', 'Batanes', 'Batangas', 'Benguet', 'Biliran', 'Bohol', 'Bukidnon', 'Bulacan', 'Cagayan', 'Camarines Norte', 'Camarines Sur', 'Camiguin', 'Capiz', 'Catanduanes', 'Cavite', 'Cebu', 'Compostela Valley', 'Cotabato', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental', 'Davao Oriental', 'Dinagat Islands', 'Eastern Samar', 'Guimaras', 'Ifugao', 'Ilocos Norte', 'Ilocos Sur', 'Iloilo', 'Isabela', 'Kalinga', 'La Union', 'Laguna', 'Lanao del Norte', 'Lanao del Sur', 'Leyte', 'Maguindanao', 'Marinduque', 'Masbate', 'Mindoro Occidental', 'Mindoro Oriental', 'Misamis Occidental', 'Misamis Oriental', 'Mountain Province', 'Negros Occidental', 'Negros Oriental', 'Northern Samar', 'Nueva Ecija', 'Nueva Vizcaya', 'Palawan', 'Pampanga', 'Pangasinan', 'Quezon', 'Quirino', 'Rizal', 'Romblon', 'Samar', 'Sarangani', 'Siquijor', 'Sorsogon', 'South Cotabato', 'Southern Leyte', 'Sultan Kudarat', 'Sulu', 'Surigao del Norte', 'Surigao del Sur', 'Tarlac', 'Tawi-Tawi', 'Zambales', 'Zamboanga del Norte', 'Zamboanga del Sur', 'Zamboanga Sibugay', 'Metro Manila'],
  'ID': ['Aceh', 'Bali', 'Banten', 'Bengkulu', 'Gorontalo', 'Jakarta', 'Jambi', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 'Kepulauan Bangka Belitung', 'Kepulauan Riau', 'Lampung', 'Maluku', 'Maluku Utara', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Papua', 'Papua Barat', 'Riau', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Sulawesi Utara', 'Sumatera Barat', 'Sumatera Selatan', 'Sumatera Utara', 'Yogyakarta'],
  'MY': ['Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Malacca', 'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'],
  'SG': ['Central Region', 'East Region', 'North Region', 'North-East Region', 'West Region'],
  'BN': ['Belait', 'Brunei-Muara', 'Temburong', 'Tutong'],
  'LA': ['Attapeu', 'Bokeo', 'Bolikhamxai', 'Champasak', 'Houaphanh', 'Khammouane', 'Luang Namtha', 'Luang Prabang', 'Oudomxai', 'Phongsali', 'Sainyabuli', 'Salavan', 'Savannakhet', 'Sekong', 'Vientiane', 'Vientiane Prefecture', 'Xaignabouli', 'Xaisomboun', 'Xiangkhouang'],
  'KH': ['Banteay Meanchey', 'Battambang', 'Kampong Cham', 'Kampong Chhnang', 'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Kep', 'Koh Kong', 'Kratié', 'Mondulkiri', 'Oddar Meanchey', 'Pailin', 'Phnom Penh', 'Preah Sihanouk', 'Preah Vihear', 'Prey Veng', 'Pursat', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng', 'Takéo', 'Tboung Khmum'],
  'MM': ['Ayeyarwady', 'Bago', 'Chin', 'Kachin', 'Kayah', 'Kayin', 'Magway', 'Mandalay', 'Mon', 'Naypyidaw', 'Rakhine', 'Sagaing', 'Shan', 'Tanintharyi', 'Yangon'],
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DU SUD
  // ═══════════════════════════════════════════════════════════════
  
  'IN': [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    // Union Territories
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ],
  
  'PK': ['Azad Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad Capital Territory', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'],
  'BD': ['Barisal', 'Chittagong', 'Dhaka', 'Khulna', 'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet'],
  'LK': ['Central', 'Eastern', 'North Central', 'North Western', 'Northern', 'Sabaragamuwa', 'Southern', 'Uva', 'Western'],
  'NP': ['Bagmati', 'Gandaki', 'Karnali', 'Lumbini', 'Madhesh', 'Sudurpashchim', 'Province No. 1'],
  'BT': ['Bumthang', 'Chhukha', 'Dagana', 'Gasa', 'Haa', 'Lhuntse', 'Mongar', 'Paro', 'Pemagatshel', 'Punakha', 'Samdrup Jongkhar', 'Samtse', 'Sarpang', 'Thimphu', 'Trashigang', 'Trashiyangtse', 'Trongsa', 'Tsirang', 'Wangdue Phodrang', 'Zhemgang'],
  'MV': ['Addu City', 'Alifu Alifu', 'Alifu Dhaalu', 'Baa', 'Dhaalu', 'Faafu', 'Gaafu Alifu', 'Gaafu Dhaalu', 'Gnaviyani', 'Haa Alifu', 'Haa Dhaalu', 'Kaafu', 'Laamu', 'Lhaviyani', 'Malé', 'Meemu', 'Noonu', 'Raa', 'Seenu', 'Shaviyani', 'Thaa', 'Vaavu'],
  'AF': ['Badakhshan', 'Badghis', 'Baghlan', 'Balkh', 'Bamyan', 'Daykundi', 'Farah', 'Faryab', 'Ghazni', 'Ghor', 'Helmand', 'Herat', 'Jowzjan', 'Kabul', 'Kandahar', 'Kapisa', 'Khost', 'Kunar', 'Kunduz', 'Laghman', 'Logar', 'Nangarhar', 'Nimruz', 'Nuristan', 'Paktia', 'Paktika', 'Panjshir', 'Parwan', 'Samangan', 'Sar-e Pol', 'Takhar', 'Urozgan', 'Wardak', 'Zabul'],
  
  // ═══════════════════════════════════════════════════════════════
  // MOYEN-ORIENT
  // ═══════════════════════════════════════════════════════════════
  
  'SA': ['Al Bahah', 'Al Jawf', 'Al Madinah', 'Al-Qassim', 'Ar Riyad', 'Asir', 'Eastern Province', 'Ha\'il', 'Jazan', 'Makkah', 'Najran', 'Northern Borders', 'Tabuk'],
  'AE': ['Abu Dhabi', 'Ajman', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Umm Al Quwain'],
  'QA': ['Ad Dawhah', 'Al Daayen', 'Al Khor', 'Al Rayyan', 'Al Shamal', 'Al Wakrah', 'Al-Shahaniya', 'Umm Salal'],
  'KW': ['Al Ahmadi', 'Al Farwaniyah', 'Al Jahra', 'Capital', 'Hawalli', 'Mubarak Al-Kabeer'],
  'BH': ['Capital', 'Muharraq', 'Northern', 'Southern'],
  'OM': ['Ad Dakhiliyah', 'Ad Dhahirah', 'Al Batinah North', 'Al Batinah South', 'Al Buraimi', 'Al Wusta', 'Ash Sharqiyah North', 'Ash Sharqiyah South', 'Dhofar', 'Musandam', 'Muscat'],
  'YE': ['Abyan', 'Adan', 'Ad Dali', 'Al Bayda', 'Al Hudaydah', 'Al Jawf', 'Al Mahrah', 'Al Mahwit', 'Amanat Al Asimah', 'Amran', 'Dhamar', 'Hadramawt', 'Hajjah', 'Ibb', 'Lahij', 'Ma\'rib', 'Raymah', 'Sa\'dah', 'San\'a', 'Shabwah', 'Socotra', 'Ta\'izz'],
  'IL': ['Central', 'Haifa', 'Jerusalem', 'Northern', 'Southern', 'Tel Aviv'],
  'JO': ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'],
  'LB': ['Akkar', 'Baalbek-Hermel', 'Beirut', 'Beqaa', 'Mount Lebanon', 'Nabatieh', 'North', 'South'],
  'SY': ['Aleppo', 'Al-Hasakah', 'As-Suwayda', 'Daraa', 'Deir ez-Zor', 'Damascus', 'Hama', 'Homs', 'Idlib', 'Latakia', 'Quneitra', 'Raqqa', 'Rif Dimashq', 'Tartus'],
  'IQ': ['Al Anbar', 'Al Basrah', 'Al Muthanna', 'Al-Qādisiyyah', 'An Najaf', 'Arbil', 'As Sulaymaniyah', 'Babil', 'Baghdad', 'Dhi Qar', 'Diyala', 'Duhok', 'Karbala', 'Kirkuk', 'Maysan', 'Ninawa', 'Salah ad Din', 'Wasit'],
  'IR': ['Alborz', 'Ardabil', 'Bushehr', 'Chaharmahal and Bakhtiari', 'East Azerbaijan', 'Fars', 'Gilan', 'Golestan', 'Hamadan', 'Hormozgan', 'Ilam', 'Isfahan', 'Kerman', 'Kermanshah', 'Khuzestan', 'Kohgiluyeh and Boyer-Ahmad', 'Kurdistan', 'Lorestan', 'Markazi', 'Mazandaran', 'North Khorasan', 'Qazvin', 'Qom', 'Razavi Khorasan', 'Semnan', 'Sistan and Baluchestan', 'South Khorasan', 'Tehran', 'West Azerbaijan', 'Yazd', 'Zanjan'],
  'TR': ['Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'Istanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop', 'Sivas', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'],
  'CY': ['Famagusta', 'Kyrenia', 'Larnaca', 'Limassol', 'Nicosia', 'Paphos'],
  
  // ═══════════════════════════════════════════════════════════════
  // AFRIQUE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'EG': ['Alexandria', 'Aswan', 'Asyut', 'Beheira', 'Beni Suef', 'Cairo', 'Dakahlia', 'Damietta', 'Faiyum', 'Gharbia', 'Giza', 'Ismailia', 'Kafr El Sheikh', 'Luxor', 'Matruh', 'Minya', 'Monufia', 'New Valley', 'North Sinai', 'Port Said', 'Qalyubia', 'Qena', 'Red Sea', 'Sharqia', 'Sohag', 'South Sinai', 'Suez'],
  'MA': ['Béni Mellal-Khénifra', 'Casablanca-Settat', 'Dakhla-Oued Ed-Dahab', 'Drâa-Tafilalet', 'Fès-Meknès', 'Guelmim-Oued Noun', 'Laâyoune-Sakia El Hamra', 'Marrakech-Safi', 'Oriental', 'Rabat-Salé-Kénitra', 'Souss-Massa', 'Tanger-Tétouan-Al Hoceïma'],
  'DZ': ['Adrar', 'Ain Defla', 'Ain Temouchent', 'Algiers', 'Annaba', 'Batna', 'Béchar', 'Béjaïa', 'Biskra', 'Blida', 'Bordj Bou Arréridj', 'Bouira', 'Boumerdès', 'Chlef', 'Constantine', 'Djelfa', 'El Bayadh', 'El Oued', 'El Tarf', 'Ghardaïa', 'Guelma', 'Illizi', 'Jijel', 'Khenchela', 'Laghouat', 'M\'Sila', 'Mascara', 'Médéa', 'Mila', 'Mostaganem', 'Naâma', 'Oran', 'Ouargla', 'Oum El Bouaghi', 'Relizane', 'Saïda', 'Sétif', 'Sidi Bel Abbès', 'Skikda', 'Souk Ahras', 'Tamanghasset', 'Tébessa', 'Tiaret', 'Tindouf', 'Tipaza', 'Tissemsilt', 'Tizi Ouzou', 'Tlemcen'],
  'TN': ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'],
  'LY': ['Al Wahat', 'Benghazi', 'Derna', 'Ghat', 'Jabal al Akhdar', 'Jabal al Gharbi', 'Jafara', 'Jufra', 'Kufra', 'Marj', 'Misrata', 'Murqub', 'Murzuq', 'Nalut', 'Nuqat al Khams', 'Sabha', 'Sirte', 'Tripoli', 'Wadi al Hayaa', 'Wadi al Shatii', 'Zawiya'],
  'SD': ['Al Jazirah', 'Al Qadarif', 'Blue Nile', 'Central Darfur', 'East Darfur', 'Kassala', 'Khartoum', 'North Darfur', 'North Kordofan', 'Northern', 'Red Sea', 'River Nile', 'Sennar', 'South Darfur', 'South Kordofan', 'West Darfur', 'West Kordofan', 'White Nile'],
  
  // ═══════════════════════════════════════════════════════════════
  // AFRIQUE SUBSAHARIENNE
  // ═══════════════════════════════════════════════════════════════
  
  'ZA': ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'],
  'NG': ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'],
  'KE': ['Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi', 'Trans-Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'],
  'ET': ['Addis Ababa', 'Afar', 'Amhara', 'Benishangul-Gumuz', 'Dire Dawa', 'Gambela', 'Harari', 'Oromia', 'Sidama', 'Somali', 'Southern Nations, Nationalities, and Peoples\' Region', 'Tigray'],
  'GH': ['Ahafo', 'Ashanti', 'Bono', 'Bono East', 'Central', 'Eastern', 'Greater Accra', 'North East', 'Northern', 'Oti', 'Savannah', 'Upper East', 'Upper West', 'Volta', 'Western', 'Western North'],
  'TZ': ['Arusha', 'Dar es Salaam', 'Dodoma', 'Geita', 'Iringa', 'Kagera', 'Katavi', 'Kigoma', 'Kilimanjaro', 'Lindi', 'Manyara', 'Mara', 'Mbeya', 'Morogoro', 'Mtwara', 'Mwanza', 'Njombe', 'Pemba North', 'Pemba South', 'Pwani', 'Rukwa', 'Ruvuma', 'Shinyanga', 'Simiyu', 'Singida', 'Songwe', 'Tabora', 'Tanga', 'Zanzibar North', 'Zanzibar South and Central', 'Zanzibar West'],
  'UG': ['Abim', 'Adjumani', 'Agago', 'Alebtong', 'Amolatar', 'Amudat', 'Amuria', 'Amuru', 'Apac', 'Arua', 'Budaka', 'Bududa', 'Bugiri', 'Buhweju', 'Buikwe', 'Bukedea', 'Bukomansimbi', 'Bukwo', 'Bulambuli', 'Buliisa', 'Bundibugyo', 'Bunyangabu', 'Bushenyi', 'Busia', 'Butaleja', 'Butambala', 'Butebo', 'Buvuma', 'Buyende', 'Dokolo', 'Gomba', 'Gulu', 'Hoima', 'Ibanda', 'Iganga', 'Isingiro', 'Jinja', 'Kaabong', 'Kabale', 'Kabarole', 'Kaberamaido', 'Kagadi', 'Kakumiro', 'Kalangala', 'Kaliro', 'Kalungu', 'Kampala', 'Kamuli', 'Kamwenge', 'Kanungu', 'Kapchorwa', 'Kasese', 'Katakwi', 'Kayunga', 'Kibaale', 'Kiboga', 'Kibuku', 'Kiruhura', 'Kiryandongo', 'Kisoro', 'Kitgum', 'Koboko', 'Kole', 'Kotido', 'Kumi', 'Kween', 'Kyankwanzi', 'Kyegegwa', 'Kyenjojo', 'Kyotera', 'Lamwo', 'Lira', 'Luuka', 'Luwero', 'Lwengo', 'Lyantonde', 'Manafwa', 'Maracha', 'Masaka', 'Masindi', 'Mayuge', 'Mbale', 'Mbarara', 'Mitooma', 'Mityana', 'Moroto', 'Moyo', 'Mpigi', 'Mubende', 'Mukono', 'Nakapiripirit', 'Nakaseke', 'Nakasongola', 'Namayingo', 'Namisindwa', 'Namutumba', 'Napak', 'Nebbi', 'Ngora', 'Ntoroko', 'Ntungamo', 'Nwoya', 'Omoro', 'Otuke', 'Oyam', 'Pader', 'Pakwach', 'Pallisa', 'Rakai', 'Rubanda', 'Rubirizi', 'Rukiga', 'Rukungiri', 'Sembabule', 'Serere', 'Sheema', 'Sironko', 'Soroti', 'Tororo', 'Wakiso', 'Yumbe', 'Zombo'],
  
  // Ajoutez d'autres pays africains selon vos besoins...
  
  // ═══════════════════════════════════════════════════════════════
  // OCÉANIE
  // ═══════════════════════════════════════════════════════════════
  
  'AU': [
    'New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria',
    'Western Australia', 'Australian Capital Territory', 'Northern Territory'
  ],
  
  'NZ': [
    'Auckland', 'Bay of Plenty', 'Canterbury', 'Gisborne', 'Hawke\'s Bay',
    'Manawatu-Wanganui', 'Marlborough', 'Nelson', 'Northland', 'Otago',
    'Southland', 'Taranaki', 'Tasman', 'Waikato', 'Wellington', 'West Coast'
  ],
  
  'PG': ['Bougainville', 'Central', 'Chimbu', 'East New Britain', 'East Sepik', 'Eastern Highlands', 'Enga', 'Gulf', 'Hela', 'Jiwaka', 'Madang', 'Manus', 'Milne Bay', 'Morobe', 'National Capital District', 'New Ireland', 'Northern', 'Southern Highlands', 'West New Britain', 'West Sepik', 'Western', 'Western Highlands'],
  'FJ': ['Ba', 'Bua', 'Cakaudrove', 'Kadavu', 'Lau', 'Lomaiviti', 'Macuata', 'Nadroga-Navosa', 'Naitasiri', 'Namosi', 'Ra', 'Rewa', 'Serua', 'Tailevu'],
  
  // Pays avec région unique (ville-état, petits pays)
  'MC': ['Monaco'],
  'VA': ['Vatican City'],
  'SM': ['San Marino'],
  'LI': ['Liechtenstein'],
  'AD': ['Andorra'],
  'MT': ['Malta'],
  'MV': ['Maldives'],
  'BB': ['Barbados'],
  'LC': ['Saint Lucia'],
  'GD': ['Grenada'],
  'VC': ['Saint Vincent and the Grenadines'],
  'AG': ['Antigua and Barbuda'],
  'KN': ['Saint Kitts and Nevis'],
  'DM': ['Dominica'],
};

// Formats téléphoniques (longueur attendue des chiffres sans indicatif)
const phoneFormatsByCountry = {
    // ═══════════════════════════════════════════════════════════════
  // AMÉRIQUE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'US': {
    format: '(XXX) XXX-XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+1',
    example: '(555) 123-4567',
    regex: '^[2-9]\\d{2}[2-9]\\d{6}$'
  },
  
  'CA': {
    format: '(XXX) XXX-XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+1',
    example: '(514) 123-4567',
    regex: '^[2-9]\\d{2}[2-9]\\d{6}$'
  },
  
  'MX': {
    format: 'XX XXXX XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+52',
    example: '55 1234 5678',
    regex: '^\\d{10}$'
  },
  
  // ═══════════════════════════════════════════════════════════════
  // AMÉRIQUE CENTRALE & SUD
  // ═══════════════════════════════════════════════════════════════
  
  'BR': {
    format: '(XX) XXXXX-XXXX',
    maxLen: 11,
    minLen: 10,
    countryCode: '+55',
    example: '(11) 91234-5678',
    regex: '^\\d{10,11}$'
  },
  
  'AR': {
    format: 'XX XXXX-XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+54',
    example: '11 1234-5678',
    regex: '^\\d{10}$'
  },
  
  'CL': {
    format: 'X XXXX XXXX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+56',
    example: '9 1234 5678',
    regex: '^\\d{9}$'
  },
  
  'CO': {
    format: 'XXX XXX XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+57',
    example: '321 123 4567',
    regex: '^\\d{10}$'
  },
  
  'PE': {
    format: 'XXX XXX XXX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+51',
    example: '987 654 321',
    regex: '^\\d{9}$'
  },
  
  'VE': {
    format: 'XXXX-XXX XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+58',
    example: '0412-123 4567',
    regex: '^\\d{10}$'
  },
  
  'EC': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+593', example: '99 123 4567' },
  'BO': { format: 'X XXX XXXX', maxLen: 8, minLen: 8, countryCode: '+591', example: '7 123 4567' },
  'PY': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+595', example: '981 123 456' },
  'UY': { format: 'X XXX XX XX', maxLen: 8, minLen: 8, countryCode: '+598', example: '9 123 45 67' },
  'GT': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+502', example: '5123 4567' },
  'CR': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+506', example: '8123 4567' },
  'PA': { format: 'XXXX-XXXX', maxLen: 8, minLen: 7, countryCode: '+507', example: '6123-4567' },
  'SV': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+503', example: '7123 4567' },
  'HN': { format: 'XXXX-XXXX', maxLen: 8, minLen: 8, countryCode: '+504', example: '9123-4567' },
  'NI': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+505', example: '8123 4567' },
  'BZ': { format: 'XXX-XXXX', maxLen: 7, minLen: 7, countryCode: '+501', example: '622-1234' },
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DE L'OUEST
  // ═══════════════════════════════════════════════════════════════
  
  'FR': {
    format: 'XX XX XX XX XX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+33',
    example: '06 12 34 56 78',
    regex: '^0[1-9]\\d{8}$'
  },
  
  'DE': {
    format: 'XXX XXXXXXXX',
    maxLen: 11,
    minLen: 10,
    countryCode: '+49',
    example: '151 12345678',
    regex: '^\\d{10,11}$'
  },
  
  'GB': {
    format: 'XXXXX XXXXXX',
    maxLen: 11,
    minLen: 10,
    countryCode: '+44',
    example: '07700 123456',
    regex: '^\\d{10,11}$'
  },
  
  'IT': {
    format: 'XXX XXX XXXX',
    maxLen: 10,
    minLen: 9,
    countryCode: '+39',
    example: '320 123 4567',
    regex: '^\\d{9,10}$'
  },
  
  'ES': {
    format: 'XXX XX XX XX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+34',
    example: '612 34 56 78',
    regex: '^[6-9]\\d{8}$'
  },
  
  'PT': {
    format: 'XXX XXX XXX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+351',
    example: '912 345 678',
    regex: '^\\d{9}$'
  },
  
  'NL': {
    format: 'XX XXXX XXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+31',
    example: '06 1234 5678',
    regex: '^0?6\\d{8}$'
  },
  
  'BE': {
    format: 'XXX XX XX XX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+32',
    example: '470 12 34 56',
    regex: '^\\d{9}$'
  },
  
  'CH': {
    format: 'XX XXX XX XX',
    maxLen: 9,
    minLen: 9,
    countryCode: '+41',
    example: '79 123 45 67',
    regex: '^\\d{9}$'
  },
  
  'AT': {
    format: 'XXX XXXXXXX',
    maxLen: 10,
    minLen: 10,
    countryCode: '+43',
    example: '664 1234567',
    regex: '^\\d{10}$'
  },
  
  'LU': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+352', example: '621 123 456' },
  'IE': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+353', example: '85 123 4567' },
  'GR': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+30', example: '690 123 4567' },
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'SE': { format: 'XX-XXX XX XX', maxLen: 9, minLen: 9, countryCode: '+46', example: '70-123 45 67' },
  'NO': { format: 'XXX XX XXX', maxLen: 8, minLen: 8, countryCode: '+47', example: '412 34 567' },
  'DK': { format: 'XX XX XX XX', maxLen: 8, minLen: 8, countryCode: '+45', example: '20 12 34 56' },
  'FI': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+358', example: '50 123 4567' },
  'IS': { format: 'XXX XXXX', maxLen: 7, minLen: 7, countryCode: '+354', example: '611 2345' },
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DE L'EST
  // ═══════════════════════════════════════════════════════════════
  
  'PL': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+48', example: '501 123 456' },
  'CZ': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+420', example: '601 123 456' },
  'SK': { format: 'XXXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+421', example: '0901 123 456' },
  'HU': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+36', example: '20 123 4567' },
  'RO': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+40', example: '712 345 678' },
  'BG': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+359', example: '887 123 456' },
  'UA': { format: 'XX XXX XX XX', maxLen: 9, minLen: 9, countryCode: '+380', example: '50 123 45 67' },
  'BY': { format: 'XX XXX-XX-XX', maxLen: 9, minLen: 9, countryCode: '+375', example: '29 123-45-67' },
  'MD': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+373', example: '6912 3456' },
  
  // ═══════════════════════════════════════════════════════════════
  // EUROPE DU SUD
  // ═══════════════════════════════════════════════════════════════
  
  'HR': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+385', example: '91 123 4567' },
  'RS': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+381', example: '60 123 4567' },
  'SI': { format: 'XX XXX XXX', maxLen: 8, minLen: 8, countryCode: '+386', example: '31 123 456' },
  'BA': { format: 'XX-XXX-XXX', maxLen: 8, minLen: 8, countryCode: '+387', example: '61-123-456' },
  'ME': { format: 'XX XXX XXX', maxLen: 8, minLen: 8, countryCode: '+382', example: '67 123 456' },
  'MK': { format: 'XX XXX XXX', maxLen: 8, minLen: 8, countryCode: '+389', example: '70 123 456' },
  'AL': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+355', example: '672 123 456' },
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DE L'EST
  // ═══════════════════════════════════════════════════════════════
  
  'CN': { format: 'XXX XXXX XXXX', maxLen: 11, minLen: 11, countryCode: '+86', example: '138 0013 8000' },
  'JP': { format: 'XX-XXXX-XXXX', maxLen: 10, minLen: 10, countryCode: '+81', example: '90-1234-5678' },
  'KR': { format: 'XX-XXXX-XXXX', maxLen: 10, minLen: 10, countryCode: '+82', example: '10-1234-5678' },
  'TW': { format: 'XXXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+886', example: '0912 345 678' },
  'HK': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+852', example: '5123 4567' },
  'MO': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+853', example: '6612 3456' },
  'MN': { format: 'XX XX XXXX', maxLen: 8, minLen: 8, countryCode: '+976', example: '88 12 3456' },
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DU SUD-EST
  // ═══════════════════════════════════════════════════════════════
  
  'TH': { format: 'XX-XXX-XXXX', maxLen: 9, minLen: 9, countryCode: '+66', example: '81-234-5678' },
  'VN': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 9, countryCode: '+84', example: '091 234 5678' },
  'PH': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+63', example: '917 123 4567' },
  'ID': { format: 'XXX-XXXX-XXXX', maxLen: 11, minLen: 10, countryCode: '+62', example: '812-3456-7890' },
  'MY': { format: 'XX-XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+60', example: '12-345 6789' },
  'SG': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+65', example: '8123 4567' },
  'BN': { format: 'XXX XXXX', maxLen: 7, minLen: 7, countryCode: '+673', example: '712 3456' },
  'LA': { format: 'XX XX XXX XXX', maxLen: 10, minLen: 9, countryCode: '+856', example: '20 12 345 678' },
  'KH': { format: 'XX XXX XXXX', maxLen: 9, minLen: 8, countryCode: '+855', example: '12 345 6789' },
  'MM': { format: 'XX XXX XXXX', maxLen: 9, minLen: 8, countryCode: '+95', example: '09 123 4567' },
  
  // ═══════════════════════════════════════════════════════════════
  // ASIE DU SUD
  // ═══════════════════════════════════════════════════════════════
  
  'IN': { format: 'XXXXX XXXXX', maxLen: 10, minLen: 10, countryCode: '+91', example: '98765 43210' },
  'PK': { format: 'XXX XXXXXXX', maxLen: 10, minLen: 10, countryCode: '+92', example: '300 1234567' },
  'BD': { format: 'XXXX-XXXXXX', maxLen: 10, minLen: 10, countryCode: '+880', example: '1812-345678' },
  'LK': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+94', example: '71 234 5678' },
  'NP': { format: 'XXX-XXXXXXX', maxLen: 10, minLen: 10, countryCode: '+977', example: '984-1234567' },
  'BT': { format: 'X XXX XXXX', maxLen: 8, minLen: 8, countryCode: '+975', example: '17 123 456' },
  'MV': { format: 'XXX-XXXX', maxLen: 7, minLen: 7, countryCode: '+960', example: '791-2345' },
  'AF': { format: 'XXX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+93', example: '701 234 567' },
  
  // ═══════════════════════════════════════════════════════════════
  // MOYEN-ORIENT
  // ═══════════════════════════════════════════════════════════════
  
  'SA': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+966', example: '50 123 4567' },
  'AE': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+971', example: '50 123 4567' },
  'QA': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+974', example: '3312 3456' },
  'KW': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+965', example: '5012 3456' },
  'BH': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+973', example: '3612 3456' },
  'OM': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+968', example: '9123 4567' },
  'YE': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+967', example: '712 345 678' },
  'IL': { format: 'XX-XXX-XXXX', maxLen: 9, minLen: 9, countryCode: '+972', example: '50-123-4567' },
  'JO': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+962', example: '79 123 4567' },
  'LB': { format: 'XX XXX XXX', maxLen: 8, minLen: 7, countryCode: '+961', example: '71 123 456' },
  'SY': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+963', example: '944 123 456' },
  'IQ': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+964', example: '790 123 4567' },
  'IR': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+98', example: '912 345 6789' },
  'TR': { format: 'XXX XXX XX XX', maxLen: 10, minLen: 10, countryCode: '+90', example: '532 123 45 67' },
  'CY': { format: 'XX XXXXXX', maxLen: 8, minLen: 8, countryCode: '+357', example: '96 123456' },
  
  // ═══════════════════════════════════════════════════════════════
  // AFRIQUE DU NORD
  // ═══════════════════════════════════════════════════════════════
  
  'EG': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+20', example: '100 123 4567' },
  'MA': { format: 'XX-XXXX-XXX', maxLen: 9, minLen: 9, countryCode: '+212', example: '06-1234-567' },
  'DZ': { format: 'XXX XX XX XX', maxLen: 9, minLen: 9, countryCode: '+213', example: '551 23 45 67' },
  'TN': { format: 'XX XXX XXX', maxLen: 8, minLen: 8, countryCode: '+216', example: '20 123 456' },
  'LY': { format: 'XX-XXX-XXXX', maxLen: 10, minLen: 9, countryCode: '+218', example: '91-234-5678' },
  'SD': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+249', example: '91 123 4567' },
  
  // ═══════════════════════════════════════════════════════════════
  // AFRIQUE SUBSAHARIENNE
  // ═══════════════════════════════════════════════════════════════
  
  'ZA': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+27', example: '82 123 4567' },
  'NG': { format: 'XXX XXX XXXX', maxLen: 10, minLen: 10, countryCode: '+234', example: '802 123 4567' },
  'KE': { format: 'XXX XXXXXX', maxLen: 9, minLen: 9, countryCode: '+254', example: '712 345678' },
  'ET': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+251', example: '91 123 4567' },
  'GH': { format: 'XX XXX XXXX', maxLen: 9, minLen: 9, countryCode: '+233', example: '24 123 4567' },
  'TZ': { format: 'XXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+255', example: '712 345 678' },
  'UG': { format: 'XXX XXXXXX', maxLen: 9, minLen: 9, countryCode: '+256', example: '712 345678' },
  
  // ═══════════════════════════════════════════════════════════════
  // OCÉANIE
  // ═══════════════════════════════════════════════════════════════
  
  'AU': { format: 'XXXX XXX XXX', maxLen: 9, minLen: 9, countryCode: '+61', example: '0412 345 678' },
  'NZ': { format: 'XX XXX XXXX', maxLen: 9, minLen: 8, countryCode: '+64', example: '21 123 4567' },
  'PG': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+675', example: '7012 3456' },
  'FJ': { format: 'XXX XXXX', maxLen: 7, minLen: 7, countryCode: '+679', example: '701 2345' },
  
  // Petits pays/territoires (format simple)
  'MC': { format: 'XX XX XX XX XX', maxLen: 8, minLen: 8, countryCode: '+377', example: '06 12 34 56 78' },
  'VA': { format: 'XX XXXX XXXX', maxLen: 10, minLen: 10, countryCode: '+39', example: '06 6982 3456' },
  'SM': { format: 'XXXX XXXXXX', maxLen: 10, minLen: 10, countryCode: '+378', example: '0549 123456' },
  'LI': { format: 'XXX XX XX', maxLen: 7, minLen: 7, countryCode: '+423', example: '660 12 34' },
  'AD': { format: 'XXX XXX', maxLen: 6, minLen: 6, countryCode: '+376', example: '312 345' },
  'MT': { format: 'XXXX XXXX', maxLen: 8, minLen: 8, countryCode: '+356', example: '7912 3456' },
};

const getPhoneMaxLength = (countryCode, dialCode) => {
    const upper = countryCode ? String(countryCode).toUpperCase() : '';
    if (phoneFormatsByCountry[upper]) {
        return phoneFormatsByCountry[upper].maxLen;
    }

    if (dialCode === '+1') return 10;
    if (dialCode === '+33') return 9;
    return 10;
};

if (typeof window !== 'undefined') {
    window.countriesData = countriesData;
    window.regionsByCountry = regionsByCountry;
    window.phoneFormatsByCountry = phoneFormatsByCountry;
    window.getPhoneMaxLength = getPhoneMaxLength;
}

function normalizeCountryCode(value) {
  return String(value || '').trim().toUpperCase();
}

function stripDiacritics(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function slugifyStable(value) {
  return stripDiacritics(value)
    .replace(/['’]/g, '')
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase();
}

function uniqueStrings(values) {
  return Array.from(new Set((values || []).filter(Boolean).map((value) => String(value).trim()).filter(Boolean)));
}

function makeFlagEmoji(countryCode) {
  const code = normalizeCountryCode(countryCode);
  if (code.length !== 2) return '';
  return String.fromCodePoint(
    127397 + code.charCodeAt(0),
    127397 + code.charCodeAt(1)
  );
}

function getCountryFlagUrl(countryCode) {
  const code = normalizeCountryCode(countryCode).toLowerCase();
  return code ? `/assets/flags/countries/${code}.png` : '';
}

function getCountryRemoteFlagUrl(countryCode) {
  const code = normalizeCountryCode(countryCode).toLowerCase();
  return code ? `https://flagcdn.com/w80/${code}.png` : '';
}

const countryNameByCode = countriesData.reduce((acc, country) => {
  acc[country.code] = country.name;
  return acc;
}, {});

const continentMap = {
  'AF': 'Africa', 'DZ': 'Africa', 'EG': 'Africa', 'ET': 'Africa', 'GH': 'Africa', 'KE': 'Africa', 'MA': 'Africa', 'NG': 'Africa', 'SD': 'Africa', 'TZ': 'Africa', 'TN': 'Africa', 'UG': 'Africa', 'ZA': 'Africa', 'LY': 'Africa',
  'AD': 'Europe', 'AL': 'Europe', 'AT': 'Europe', 'BA': 'Europe', 'BE': 'Europe', 'BG': 'Europe', 'BH': 'Asia', 'BY': 'Europe', 'CH': 'Europe', 'CY': 'Europe', 'CZ': 'Europe', 'DE': 'Europe', 'DK': 'Europe', 'EE': 'Europe', 'ES': 'Europe', 'FI': 'Europe', 'FR': 'Europe', 'GB': 'Europe', 'GR': 'Europe', 'HR': 'Europe', 'HU': 'Europe', 'IE': 'Europe', 'IS': 'Europe', 'IT': 'Europe', 'LI': 'Europe', 'LT': 'Europe', 'LU': 'Europe', 'LV': 'Europe', 'MC': 'Europe', 'MD': 'Europe', 'ME': 'Europe', 'MK': 'Europe', 'MT': 'Europe', 'NL': 'Europe', 'NO': 'Europe', 'PL': 'Europe', 'PT': 'Europe', 'RO': 'Europe', 'RS': 'Europe', 'SE': 'Europe', 'SI': 'Europe', 'SK': 'Europe', 'SM': 'Europe', 'TR': 'Asia', 'UA': 'Europe', 'VA': 'Europe',
  'AE': 'Asia', 'AM': 'Asia', 'AR': 'South America', 'AS': 'Oceania', 'AU': 'Oceania', 'BD': 'Asia', 'BF': 'Africa', 'BN': 'Asia', 'BO': 'South America', 'BR': 'South America', 'BT': 'Asia', 'BZ': 'North America', 'CA': 'North America', 'CD': 'Africa', 'CF': 'Africa', 'CG': 'Africa', 'CL': 'South America', 'CM': 'Africa', 'CN': 'Asia', 'CO': 'South America', 'CR': 'North America', 'CU': 'North America', 'CV': 'Africa', 'CW': 'North America', 'CX': 'Oceania', 'DJ': 'Africa', 'DM': 'North America', 'DO': 'North America', 'EC': 'South America', 'EH': 'Africa', 'ER': 'Africa', 'FJ': 'Oceania', 'FM': 'Oceania', 'GA': 'Africa', 'GD': 'North America', 'GE': 'Asia', 'GF': 'South America', 'GG': 'Europe', 'GL': 'North America', 'GM': 'Africa', 'GN': 'Africa', 'GP': 'North America', 'GQ': 'Africa', 'GT': 'North America', 'GU': 'Oceania', 'GY': 'South America', 'HK': 'Asia', 'HN': 'North America', 'HT': 'North America', 'ID': 'Asia', 'IL': 'Asia', 'IM': 'Europe', 'IN': 'Asia', 'IO': 'Asia', 'IQ': 'Asia', 'IR': 'Asia', 'JE': 'Europe', 'JM': 'North America', 'JO': 'Asia', 'JP': 'Asia', 'KH': 'Asia', 'KI': 'Oceania', 'KM': 'Africa', 'KN': 'North America', 'KP': 'Asia', 'KR': 'Asia', 'KW': 'Asia', 'KY': 'North America', 'KZ': 'Asia', 'LA': 'Asia', 'LB': 'Asia', 'LC': 'North America', 'LK': 'Asia', 'LR': 'Africa', 'LS': 'Africa', 'MO': 'Asia', 'MN': 'Asia', 'MP': 'Oceania', 'MQ': 'North America', 'MR': 'Africa', 'MS': 'North America', 'MU': 'Africa', 'MV': 'Asia', 'MW': 'Africa', 'MX': 'North America', 'MY': 'Asia', 'MZ': 'Africa', 'NC': 'Oceania', 'NE': 'Africa', 'NF': 'Oceania', 'NI': 'North America', 'NZ': 'Oceania', 'OM': 'Asia', 'PA': 'North America', 'PE': 'South America', 'PF': 'Oceania', 'PG': 'Oceania', 'PH': 'Asia', 'PK': 'Asia', 'PR': 'North America', 'PS': 'Asia', 'PW': 'Oceania', 'PY': 'South America', 'QA': 'Asia', 'RE': 'Africa', 'RW': 'Africa', 'SA': 'Asia', 'SB': 'Oceania', 'SC': 'Africa', 'SG': 'Asia', 'SH': 'Africa', 'SL': 'Africa', 'SN': 'Africa', 'SR': 'South America', 'ST': 'Africa', 'SV': 'North America', 'SX': 'North America', 'SY': 'Asia', 'SZ': 'Africa', 'TC': 'North America', 'TD': 'Africa', 'TF': 'Antarctica', 'TG': 'Africa', 'TH': 'Asia', 'TJ': 'Asia', 'TK': 'Oceania', 'TL': 'Asia', 'TM': 'Asia', 'TO': 'Oceania', 'TT': 'North America', 'TV': 'Oceania', 'TW': 'Asia', 'UY': 'South America', 'US': 'North America', 'UZ': 'Asia', 'VC': 'North America', 'VE': 'South America', 'VG': 'North America', 'VI': 'North America', 'VN': 'Asia', 'VU': 'Oceania', 'WF': 'Oceania', 'WS': 'Oceania', 'YE': 'Asia', 'YT': 'Africa', 'ZM': 'Africa', 'ZW': 'Africa'
};

const geographicalRegionMap = {
  'CA': 'North America', 'US': 'North America', 'MX': 'North America', 'GT': 'Central America', 'BZ': 'Central America', 'SV': 'Central America', 'HN': 'Central America', 'NI': 'Central America', 'CR': 'Central America', 'PA': 'Central America',
  'AR': 'South America', 'BO': 'South America', 'BR': 'South America', 'CL': 'South America', 'CO': 'South America', 'EC': 'South America', 'GY': 'South America', 'PE': 'South America', 'PY': 'South America', 'SR': 'South America', 'UY': 'South America', 'VE': 'South America',
  'FR': 'Western Europe', 'BE': 'Western Europe', 'NL': 'Western Europe', 'LU': 'Western Europe', 'CH': 'Western Europe', 'AT': 'Central Europe', 'DE': 'Central Europe', 'GB': 'Northern Europe', 'IE': 'Northern Europe', 'SE': 'Northern Europe', 'NO': 'Northern Europe', 'DK': 'Northern Europe', 'FI': 'Northern Europe', 'IS': 'Northern Europe',
  'ES': 'Southern Europe', 'PT': 'Southern Europe', 'IT': 'Southern Europe', 'GR': 'Southern Europe', 'HR': 'Southeast Europe', 'SI': 'Southeast Europe', 'RS': 'Southeast Europe', 'BA': 'Southeast Europe', 'ME': 'Southeast Europe', 'MK': 'Southeast Europe', 'AL': 'Southeast Europe',
  'PL': 'Eastern Europe', 'CZ': 'Central Europe', 'SK': 'Central Europe', 'HU': 'Central Europe', 'RO': 'Eastern Europe', 'BG': 'Eastern Europe', 'UA': 'Eastern Europe', 'BY': 'Eastern Europe', 'MD': 'Eastern Europe',
  'CN': 'East Asia', 'JP': 'East Asia', 'KR': 'East Asia', 'TW': 'East Asia', 'HK': 'East Asia', 'MO': 'East Asia', 'MN': 'East Asia',
  'TH': 'Southeast Asia', 'VN': 'Southeast Asia', 'PH': 'Southeast Asia', 'ID': 'Southeast Asia', 'MY': 'Southeast Asia', 'SG': 'Southeast Asia', 'BN': 'Southeast Asia', 'LA': 'Southeast Asia', 'KH': 'Southeast Asia', 'MM': 'Southeast Asia',
  'IN': 'South Asia', 'PK': 'South Asia', 'BD': 'South Asia', 'LK': 'South Asia', 'NP': 'South Asia', 'BT': 'South Asia', 'MV': 'South Asia', 'AF': 'South Asia',
  'SA': 'Middle East', 'AE': 'Middle East', 'QA': 'Middle East', 'KW': 'Middle East', 'BH': 'Middle East', 'OM': 'Middle East', 'YE': 'Middle East', 'IL': 'Middle East', 'JO': 'Middle East', 'LB': 'Middle East', 'SY': 'Middle East', 'IQ': 'Middle East', 'IR': 'Middle East', 'TR': 'Middle East', 'CY': 'Eastern Mediterranean',
  'EG': 'North Africa', 'MA': 'North Africa', 'DZ': 'North Africa', 'TN': 'North Africa', 'LY': 'North Africa', 'SD': 'North Africa',
  'ZA': 'Southern Africa', 'NG': 'West Africa', 'KE': 'East Africa', 'ET': 'East Africa', 'GH': 'West Africa', 'TZ': 'East Africa', 'UG': 'East Africa',
  'AU': 'Oceania', 'NZ': 'Oceania', 'PG': 'Oceania', 'FJ': 'Oceania'
};

const shippingZoneMap = {
  'CA': 'Canada', 'US': 'United States', 'MX': 'Mexico', 'GT': 'Central America', 'BZ': 'Central America', 'SV': 'Central America', 'HN': 'Central America', 'NI': 'Central America', 'CR': 'Central America', 'PA': 'Central America',
  'AR': 'South America', 'BO': 'South America', 'BR': 'South America', 'CL': 'South America', 'CO': 'South America', 'EC': 'South America', 'GY': 'South America', 'PE': 'South America', 'PY': 'South America', 'SR': 'South America', 'UY': 'South America', 'VE': 'South America',
  'FR': 'Europe West', 'BE': 'Europe West', 'NL': 'Europe West', 'LU': 'Europe West', 'CH': 'Europe West', 'AT': 'Europe Central', 'DE': 'Europe Central', 'GB': 'Europe North', 'IE': 'Europe North', 'SE': 'Europe North', 'NO': 'Europe North', 'DK': 'Europe North', 'FI': 'Europe North', 'IS': 'Europe North',
  'ES': 'Europe South', 'PT': 'Europe South', 'IT': 'Europe South', 'GR': 'Europe South', 'HR': 'Europe Balkans', 'SI': 'Europe Balkans', 'RS': 'Europe Balkans', 'BA': 'Europe Balkans', 'ME': 'Europe Balkans', 'MK': 'Europe Balkans', 'AL': 'Europe Balkans',
  'PL': 'Europe East', 'CZ': 'Europe Central', 'SK': 'Europe Central', 'HU': 'Europe Central', 'RO': 'Europe East', 'BG': 'Europe East', 'UA': 'Europe East', 'BY': 'Europe East', 'MD': 'Europe East',
  'CN': 'Asia East', 'JP': 'Asia East', 'KR': 'Asia East', 'TW': 'Asia East', 'HK': 'Asia East', 'MO': 'Asia East', 'MN': 'Asia East',
  'TH': 'Asia Southeast', 'VN': 'Asia Southeast', 'PH': 'Asia Southeast', 'ID': 'Asia Southeast', 'MY': 'Asia Southeast', 'SG': 'Asia Southeast', 'BN': 'Asia Southeast', 'LA': 'Asia Southeast', 'KH': 'Asia Southeast', 'MM': 'Asia Southeast',
  'IN': 'Asia South', 'PK': 'Asia South', 'BD': 'Asia South', 'LK': 'Asia South', 'NP': 'Asia South', 'BT': 'Asia South', 'MV': 'Asia South', 'AF': 'Asia South',
  'SA': 'Middle East', 'AE': 'Middle East', 'QA': 'Middle East', 'KW': 'Middle East', 'BH': 'Middle East', 'OM': 'Middle East', 'YE': 'Middle East', 'IL': 'Middle East', 'JO': 'Middle East', 'LB': 'Middle East', 'SY': 'Middle East', 'IQ': 'Middle East', 'IR': 'Middle East', 'TR': 'Middle East', 'CY': 'Middle East',
  'EG': 'North Africa', 'MA': 'North Africa', 'DZ': 'North Africa', 'TN': 'North Africa', 'LY': 'North Africa', 'SD': 'North Africa',
  'ZA': 'Africa South', 'NG': 'Africa West', 'KE': 'Africa East', 'ET': 'Africa East', 'GH': 'Africa West', 'TZ': 'Africa East', 'UG': 'Africa East',
  'AU': 'Oceania', 'NZ': 'Oceania', 'PG': 'Oceania', 'FJ': 'Oceania'
};

const currencyMap = {
  'CA': 'CAD', 'US': 'USD', 'MX': 'MXN', 'AR': 'ARS', 'BO': 'BOB', 'BR': 'BRL', 'CL': 'CLP', 'CO': 'COP', 'CR': 'CRC', 'EC': 'USD', 'GY': 'GYD', 'PE': 'PEN', 'PY': 'PYG', 'SR': 'SRD', 'UY': 'UYU', 'VE': 'VES',
  'FR': 'EUR', 'BE': 'EUR', 'NL': 'EUR', 'LU': 'EUR', 'CH': 'CHF', 'AT': 'EUR', 'DE': 'EUR', 'GB': 'GBP', 'IE': 'EUR', 'SE': 'SEK', 'NO': 'NOK', 'DK': 'DKK', 'FI': 'EUR', 'IS': 'ISK', 'ES': 'EUR', 'PT': 'EUR', 'IT': 'EUR', 'GR': 'EUR', 'HR': 'EUR', 'SI': 'EUR', 'RS': 'RSD', 'BA': 'BAM', 'ME': 'EUR', 'MK': 'MKD', 'AL': 'ALL', 'PL': 'PLN', 'CZ': 'CZK', 'SK': 'EUR', 'HU': 'HUF', 'RO': 'RON', 'BG': 'BGN', 'UA': 'UAH', 'BY': 'BYN', 'MD': 'MDL',
  'CN': 'CNY', 'JP': 'JPY', 'KR': 'KRW', 'TW': 'TWD', 'HK': 'HKD', 'MO': 'MOP', 'MN': 'MNT',
  'TH': 'THB', 'VN': 'VND', 'PH': 'PHP', 'ID': 'IDR', 'MY': 'MYR', 'SG': 'SGD', 'BN': 'BND', 'LA': 'LAK', 'KH': 'KHR', 'MM': 'MMK',
  'IN': 'INR', 'PK': 'PKR', 'BD': 'BDT', 'LK': 'LKR', 'NP': 'NPR', 'BT': 'BTN', 'MV': 'MVR', 'AF': 'AFN',
  'SA': 'SAR', 'AE': 'AED', 'QA': 'QAR', 'KW': 'KWD', 'BH': 'BHD', 'OM': 'OMR', 'YE': 'YER', 'IL': 'ILS', 'JO': 'JOD', 'LB': 'LBP', 'SY': 'SYP', 'IQ': 'IQD', 'IR': 'IRR', 'TR': 'TRY', 'CY': 'EUR',
  'EG': 'EGP', 'MA': 'MAD', 'DZ': 'DZD', 'TN': 'TND', 'LY': 'LYD', 'SD': 'SDG',
  'ZA': 'ZAR', 'NG': 'NGN', 'KE': 'KES', 'ET': 'ETB', 'GH': 'GHS', 'TZ': 'TZS', 'UG': 'UGX',
  'AU': 'AUD', 'NZ': 'NZD', 'PG': 'PGK', 'FJ': 'FJD'
};

const primaryLanguageMap = {
  'CA': 'en', 'US': 'en', 'MX': 'es', 'AR': 'es', 'BO': 'es', 'BR': 'pt', 'CL': 'es', 'CO': 'es', 'CR': 'es', 'CU': 'es', 'DO': 'es', 'EC': 'es', 'GT': 'es', 'HN': 'es', 'NI': 'es', 'PA': 'es', 'PE': 'es', 'PY': 'es', 'SV': 'es', 'UY': 'es', 'VE': 'es', 'GY': 'en', 'SR': 'nl',
  'FR': 'fr', 'BE': 'nl', 'NL': 'nl', 'LU': 'fr', 'CH': 'de', 'AT': 'de', 'DE': 'de', 'GB': 'en', 'IE': 'en', 'SE': 'sv', 'NO': 'no', 'DK': 'da', 'FI': 'fi', 'IS': 'is', 'ES': 'es', 'PT': 'pt', 'IT': 'it', 'GR': 'el', 'HR': 'hr', 'SI': 'sl', 'RS': 'sr', 'BA': 'bs', 'ME': 'sr', 'MK': 'mk', 'AL': 'sq', 'PL': 'pl', 'CZ': 'cs', 'SK': 'sk', 'HU': 'hu', 'RO': 'ro', 'BG': 'bg', 'UA': 'uk', 'BY': 'be', 'MD': 'ro',
  'CN': 'zh', 'JP': 'ja', 'KR': 'ko', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'MN': 'mn',
  'TH': 'th', 'VN': 'vi', 'PH': 'en', 'ID': 'id', 'MY': 'ms', 'SG': 'en', 'BN': 'ms', 'LA': 'lo', 'KH': 'km', 'MM': 'my',
  'IN': 'en', 'PK': 'ur', 'BD': 'bn', 'LK': 'si', 'NP': 'ne', 'BT': 'dz', 'MV': 'dv', 'AF': 'fa',
  'SA': 'ar', 'AE': 'ar', 'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'IL': 'he', 'JO': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'IR': 'fa', 'TR': 'tr', 'CY': 'el',
  'EG': 'ar', 'MA': 'ar', 'DZ': 'ar', 'TN': 'ar', 'LY': 'ar', 'SD': 'ar',
  'ZA': 'en', 'NG': 'en', 'KE': 'en', 'ET': 'am', 'GH': 'en', 'TZ': 'sw', 'UG': 'en',
  'AU': 'en', 'NZ': 'en', 'PG': 'en', 'FJ': 'en'
};

const regionTypeMap = {
  'CA': 'province', 'US': 'state', 'MX': 'state', 'BR': 'state', 'AU': 'state', 'DE': 'state', 'FR': 'region', 'GB': 'country', 'IT': 'region', 'ES': 'autonomous community', 'PT': 'district', 'NL': 'province', 'BE': 'province', 'CH': 'canton', 'AT': 'state', 'IE': 'county', 'PL': 'voivodeship', 'CZ': 'region', 'SK': 'region', 'HU': 'county', 'RO': 'county', 'BG': 'province', 'UA': 'oblast', 'BY': 'region', 'MD': 'district', 'GR': 'region', 'HR': 'county', 'RS': 'region', 'SI': 'region', 'BA': 'entity', 'ME': 'municipality', 'MK': 'region', 'AL': 'county', 'CN': 'province', 'JP': 'prefecture', 'KR': 'province', 'TW': 'city', 'HK': 'district', 'MO': 'district', 'MN': 'province', 'TH': 'province', 'VN': 'province', 'PH': 'province', 'ID': 'province', 'MY': 'state', 'SG': 'city-state', 'BN': 'district', 'LA': 'province', 'KH': 'province', 'MM': 'region', 'IN': 'state', 'PK': 'province', 'BD': 'division', 'LK': 'province', 'NP': 'province', 'BT': 'district', 'MV': 'atoll', 'AF': 'province', 'SA': 'province', 'AE': 'emirate', 'QA': 'municipality', 'KW': 'governorate', 'BH': 'governorate', 'OM': 'governorate', 'YE': 'governorate', 'IL': 'district', 'JO': 'governorate', 'LB': 'governorate', 'SY': 'governorate', 'IQ': 'governorate', 'IR': 'province', 'TR': 'province', 'CY': 'district', 'EG': 'governorate', 'MA': 'region', 'DZ': 'province', 'TN': 'governorate', 'LY': 'district', 'SD': 'state', 'ZA': 'province', 'NG': 'state', 'KE': 'county', 'ET': 'region', 'GH': 'region', 'TZ': 'region', 'UG': 'district', 'AU': 'state', 'NZ': 'region', 'PG': 'province', 'FJ': 'division'
};

const officialRegionCodesByCountry = {
  'CA': {
    'Alberta': 'CA-AB',
    'British Columbia': 'CA-BC',
    'Manitoba': 'CA-MB',
    'New Brunswick': 'CA-NB',
    'Newfoundland and Labrador': 'CA-NL',
    'Northwest Territories': 'CA-NT',
    'Nova Scotia': 'CA-NS',
    'Nunavut': 'CA-NU',
    'Ontario': 'CA-ON',
    'Prince Edward Island': 'CA-PE',
    'Quebec': 'CA-QC',
    'Saskatchewan': 'CA-SK',
    'Yukon': 'CA-YT'
  },
  'US': {
    'Alabama': 'US-AL', 'Alaska': 'US-AK', 'Arizona': 'US-AZ', 'Arkansas': 'US-AR', 'California': 'US-CA', 'Colorado': 'US-CO', 'Connecticut': 'US-CT', 'Delaware': 'US-DE', 'Florida': 'US-FL', 'Georgia': 'US-GA', 'Hawaii': 'US-HI', 'Idaho': 'US-ID', 'Illinois': 'US-IL', 'Indiana': 'US-IN', 'Iowa': 'US-IA', 'Kansas': 'US-KS', 'Kentucky': 'US-KY', 'Louisiana': 'US-LA', 'Maine': 'US-ME', 'Maryland': 'US-MD', 'Massachusetts': 'US-MA', 'Michigan': 'US-MI', 'Minnesota': 'US-MN', 'Mississippi': 'US-MS', 'Missouri': 'US-MO', 'Montana': 'US-MT', 'Nebraska': 'US-NE', 'Nevada': 'US-NV', 'New Hampshire': 'US-NH', 'New Jersey': 'US-NJ', 'New Mexico': 'US-NM', 'New York': 'US-NY', 'North Carolina': 'US-NC', 'North Dakota': 'US-ND', 'Ohio': 'US-OH', 'Oklahoma': 'US-OK', 'Oregon': 'US-OR', 'Pennsylvania': 'US-PA', 'Rhode Island': 'US-RI', 'South Carolina': 'US-SC', 'South Dakota': 'US-SD', 'Tennessee': 'US-TN', 'Texas': 'US-TX', 'Utah': 'US-UT', 'Vermont': 'US-VT', 'Virginia': 'US-VA', 'Washington': 'US-WA', 'West Virginia': 'US-WV', 'Wisconsin': 'US-WI', 'Wyoming': 'US-WY',
    'District of Columbia': 'US-DC', 'Puerto Rico': 'US-PR', 'US Virgin Islands': 'US-VI', 'American Samoa': 'US-AS', 'Guam': 'US-GU', 'Northern Mariana Islands': 'US-MP'
  },
  'AU': {
    'New South Wales': 'AU-NSW', 'Queensland': 'AU-QLD', 'South Australia': 'AU-SA', 'Tasmania': 'AU-TAS', 'Victoria': 'AU-VIC', 'Western Australia': 'AU-WA', 'Australian Capital Territory': 'AU-ACT', 'Northern Territory': 'AU-NT'
  },
  'GB': {
    'England': 'GB-ENG', 'Scotland': 'GB-SCT', 'Wales': 'GB-WLS', 'Northern Ireland': 'GB-NIR',
    'London': 'GB-LND', 'West Midlands': 'GB-WMD', 'Yorkshire and the Humber': 'GB-YOR', 'North West England': 'GB-NWE', 'North East England': 'GB-NTH', 'South West England': 'GB-SWE', 'South East England': 'GB-SET', 'East of England': 'GB-EAS', 'East Midlands': 'GB-EMD'
  }
};

const metroAreasByCountryRegion = {
  'CA': {
    'Quebec': [{ code: 'YMQ', name: 'Grand Montréal', cities: ['Montréal', 'Laval', 'Longueuil', 'Brossard'] }],
    'Ontario': [{ code: 'YTO', name: 'Greater Toronto Area', cities: ['Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan'] }, { code: 'YOW', name: 'Ottawa-Gatineau', cities: ['Ottawa', 'Gatineau'] }],
    'British Columbia': [{ code: 'YVR', name: 'Metro Vancouver', cities: ['Vancouver', 'Burnaby', 'Surrey', 'Richmond'] }],
    'Alberta': [{ code: 'YYC', name: 'Calgary Metro', cities: ['Calgary', 'Airdrie', 'Okotoks'] }, { code: 'YEG', name: 'Edmonton Metro', cities: ['Edmonton', 'St. Albert', 'Sherwood Park'] }],
    'Nova Scotia': [{ code: 'YHZ', name: 'Halifax Metro', cities: ['Halifax', 'Dartmouth', 'Bedford'] }]
  },
  'US': {
    'California': [{ code: 'LAX', name: 'Los Angeles Metro', cities: ['Los Angeles', 'Long Beach', 'Anaheim', 'Santa Monica'] }, { code: 'SFO', name: 'Bay Area', cities: ['San Francisco', 'Oakland', 'San Jose', 'Berkeley'] }],
    'New York': [{ code: 'NYC', name: 'New York Metro', cities: ['New York', 'Brooklyn', 'Queens', 'Bronx'] }],
    'Texas': [{ code: 'DFW', name: 'Dallas-Fort Worth', cities: ['Dallas', 'Fort Worth', 'Arlington'] }, { code: 'HOU', name: 'Houston Metro', cities: ['Houston', 'Sugar Land', 'Pasadena'] }, { code: 'AUS', name: 'Austin Metro', cities: ['Austin', 'Round Rock', 'Cedar Park'] }],
    'Florida': [{ code: 'MIA', name: 'Miami Metro', cities: ['Miami', 'Fort Lauderdale', 'Hollywood'] }, { code: 'ORL', name: 'Orlando Metro', cities: ['Orlando', 'Kissimmee', 'Sanford'] }],
    'Illinois': [{ code: 'CHI', name: 'Chicago Metro', cities: ['Chicago', 'Evanston', 'Schaumburg'] }],
    'Georgia': [{ code: 'ATL', name: 'Atlanta Metro', cities: ['Atlanta', 'Marietta', 'Sandy Springs'] }],
    'Washington': [{ code: 'SEA', name: 'Seattle Metro', cities: ['Seattle', 'Tacoma', 'Bellevue'] }],
    'Massachusetts': [{ code: 'BOS', name: 'Boston Metro', cities: ['Boston', 'Cambridge', 'Somerville'] }]
  },
  'FR': {
    'Île-de-France': [{ code: 'PAR', name: 'Grand Paris', cities: ['Paris', 'Boulogne-Billancourt', 'Saint-Denis', 'Nanterre'] }],
    'Auvergne-Rhône-Alpes': [{ code: 'LYO', name: 'Lyon Metropole', cities: ['Lyon', 'Villeurbanne', 'Vénissieux'] }],
    'Provence-Alpes-Côte d\'Azur': [{ code: 'MRS', name: 'Aix-Marseille-Provence', cities: ['Marseille', 'Aix-en-Provence', 'Aubagne'] }, { code: 'NCE', name: 'Nice Côte d\'Azur', cities: ['Nice', 'Cagnes-sur-Mer', 'Antibes'] }],
    'Occitanie': [{ code: 'TLS', name: 'Toulouse Métropole', cities: ['Toulouse', 'Blagnac', 'Colomiers'] }, { code: 'MPL', name: 'Montpellier Méditerranée', cities: ['Montpellier', 'Lattes', 'Castelnau-le-Lez'] }],
    'Hauts-de-France': [{ code: 'LIL', name: 'Métropole Européenne de Lille', cities: ['Lille', 'Roubaix', 'Tourcoing'] }],
    'Bretagne': [{ code: 'RNS', name: 'Rennes Métropole', cities: ['Rennes', 'Saint-Grégoire', 'Cesson-Sévigné'] }],
    'Pays de la Loire': [{ code: 'NTE', name: 'Nantes Métropole', cities: ['Nantes', 'Saint-Herblain', 'Rezé'] }]
  },
  'GB': {
    'London': [{ code: 'LDN', name: 'Greater London', cities: ['London', 'Croydon', 'Bromley'] }],
    'West Midlands': [{ code: 'BHX', name: 'Birmingham Metro', cities: ['Birmingham', 'Solihull', 'Wolverhampton'] }],
    'North West England': [{ code: 'MAN', name: 'Greater Manchester', cities: ['Manchester', 'Salford', 'Stockport'] }],
    'Scotland': [{ code: 'GLA', name: 'Greater Glasgow', cities: ['Glasgow', 'Paisley', 'East Kilbride'] }, { code: 'EDI', name: 'Edinburgh Metro', cities: ['Edinburgh', 'Leith', 'Midlothian'] }]
  },
  'DE': {
    'Bayern': [{ code: 'MUC', name: 'Munich Metro', cities: ['Munich', 'Augsburg', 'Regensburg'] }],
    'Berlin': [{ code: 'BER', name: 'Berlin Metro', cities: ['Berlin', 'Potsdam'] }],
    'Hamburg': [{ code: 'HAM', name: 'Hamburg Metro', cities: ['Hamburg', 'Norderstedt'] }],
    'Nordrhein-Westfalen': [{ code: 'CGN', name: 'Rhine-Ruhr', cities: ['Cologne', 'Düsseldorf', 'Dortmund'] }],
    'Hessen': [{ code: 'FRA', name: 'Frankfurt Rhine-Main', cities: ['Frankfurt', 'Wiesbaden', 'Mainz'] }]
  },
  'AU': {
    'New South Wales': [{ code: 'SYD', name: 'Sydney Metro', cities: ['Sydney', 'Parramatta', 'Liverpool'] }],
    'Victoria': [{ code: 'MEL', name: 'Melbourne Metro', cities: ['Melbourne', 'Geelong', 'Frankston'] }],
    'Queensland': [{ code: 'BNE', name: 'Brisbane Metro', cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast'] }],
    'Western Australia': [{ code: 'PER', name: 'Perth Metro', cities: ['Perth', 'Fremantle', 'Joondalup'] }]
  }
};

const countryPrimaryLanguages = Object.assign(Object.create(null), primaryLanguageMap);

function getCountryLanguages(countryCode) {
  const code = normalizeCountryCode(countryCode);
  const primary = getCountryPrimaryLanguage(code);
  if (!primary) return ['en'];
  return primary === 'en' ? ['en'] : uniqueStrings([primary, 'en']);
}

function getCountryPrimaryLanguage(countryCode) {
  return countryPrimaryLanguages[normalizeCountryCode(countryCode)] || 'en';
}

function getCountryCurrency(countryCode) {
  return currencyMap[normalizeCountryCode(countryCode)] || null;
}

function getContinent(countryCode) {
  return continentMap[normalizeCountryCode(countryCode)] || 'Unknown';
}

function getGeographicalRegion(countryCode) {
  const code = normalizeCountryCode(countryCode);
  return geographicalRegionMap[code] || getContinent(code);
}

function getShippingZone(countryCode) {
  return shippingZoneMap[normalizeCountryCode(countryCode)] || getGeographicalRegion(countryCode);
}

function isIslandCountry(countryCode) {
  const code = normalizeCountryCode(countryCode);
  return ['AX', 'AW', 'BB', 'BL', 'BM', 'BN', 'BS', 'BV', 'CC', 'CK', 'CX', 'CW', 'DM', 'FJ', 'FK', 'FO', 'GD', 'GF', 'GP', 'GU', 'HK', 'HM', 'HT', 'IM', 'IO', 'JE', 'JM', 'KI', 'KM', 'KN', 'KY', 'LC', 'MF', 'MH', 'MO', 'MP', 'MQ', 'MS', 'MT', 'MU', 'NC', 'NF', 'NI', 'NR', 'NZ', 'PF', 'PG', 'PH', 'PM', 'PR', 'PW', 'RE', 'SB', 'SC', 'SG', 'SH', 'SJ', 'SX', 'TC', 'TK', 'TL', 'TO', 'TT', 'TV', 'TW', 'UM', 'US', 'VC', 'VG', 'VI', 'VU', 'WF', 'WS', 'YT'].includes(code);
}

function isRemoteAreaCountry(countryCode) {
  const code = normalizeCountryCode(countryCode);
  return isIslandCountry(code) || ['AQ', 'BV', 'CX', 'FK', 'HM', 'IO', 'NF', 'PM', 'SJ', 'TF', 'UM', 'YT'].includes(code);
}

function getCountryRegionType(countryCode) {
  const code = normalizeCountryCode(countryCode);
  return regionTypeMap[code] || 'region';
}

function inferRegionType(countryCode, regionName) {
  const code = normalizeCountryCode(countryCode);
  const countryType = getCountryRegionType(code);
  if (countryType === 'country') return 'region';
  return countryType;
}

function inferRegionTaxCode(countryCode, regionName, regionCode, verified) {
  if (verified && regionCode) return regionCode;
  const code = normalizeCountryCode(countryCode);
  if (code === 'US' || code === 'CA') return null;
  if (code === 'GB') return null;
  return null;
}

function getRegionLanguages(countryCode, regionCode) {
  return getCountryLanguages(countryCode);
}

function getMetroAreas(countryCode, regionCode) {
  const code = normalizeCountryCode(countryCode);
  const countryMetro = metroAreasByCountryRegion[code] || {};
  const region = getRegionData(code, regionCode);
  const regionName = region ? region.name : String(regionCode || '');
  return countryMetro[regionName] || countryMetro[normalizeCountryCode(regionCode)] || [];
}

function getRegionCode(countryCode, regionName) {
  const code = normalizeCountryCode(countryCode);
  const name = String(regionName || '').trim();
  const official = officialRegionCodesByCountry[code] && officialRegionCodesByCountry[code][name];
  if (official) return official;
  return `${code}-${slugifyStable(name || 'REGION')}`;
}

function getRegionData(countryCode, regionCode) {
  const code = normalizeCountryCode(countryCode);
  const regionTarget = String(regionCode || '').trim().toUpperCase();
  const regions = getRegionsByCountryCode(code);
  return regions.find((region) => {
    const normalizedRegionCode = String(region.code || '').trim().toUpperCase();
    const normalizedName = String(region.name || '').trim().toUpperCase();
    return normalizedRegionCode === regionTarget || normalizedName === regionTarget;
  }) || null;
}

function getCountryData(countryCode) {
  return locationData[normalizeCountryCode(countryCode)] || null;
}

function getRegionsByCountryCode(countryCode) {
  const country = getCountryData(countryCode);
  return country && Array.isArray(country.regions) ? country.regions : [];
}

function getTaxRegionCode(countryCode, regionCode) {
  const region = getRegionData(countryCode, regionCode);
  if (region && region.taxRegionCode) return region.taxRegionCode;
  const country = getCountryData(countryCode);
  if (country && country.taxRegionCode) return country.taxRegionCode;
  return null;
}

function buildCountryRegion(countryCode, regionName, index, countryMeta) {
  const official = officialRegionCodesByCountry[countryCode] && officialRegionCodesByCountry[countryCode][regionName];
  const regionCode = official || getRegionCode(countryCode, regionName);
  const verified = Boolean(official);
  const regionType = inferRegionType(countryCode, regionName);
  const isIsland = /island|île|îles|iles|atoll/i.test(regionName) || isIslandCountry(countryCode);
  const isRemoteArea = isIsland || /northwest territories|nunavut|yukon|svalbard|faroe|féroe|faroe|remote|outer/i.test(regionName);
  const metroAreas = getMetroAreas(countryCode, regionCode);

  return {
    code: regionCode,
    name: regionName,
    flagEmoji: countryMeta.flagEmoji,
    flagUrl: countryMeta.flagUrl,
    flagRemoteUrl: countryMeta.flagRemoteUrl,
    type: regionType,
    continent: countryMeta.continent,
    geographicalRegion: countryMeta.geographicalRegion,
    shippingZone: countryMeta.shippingZone,
    taxRegionCode: inferRegionTaxCode(countryCode, regionName, regionCode, verified),
    primaryLanguage: countryMeta.primaryLanguage,
    languages: getRegionLanguages(countryCode, regionCode),
    isRemoteArea,
    isIsland,
    verified,
    metroAreas,
    countryCode
  };
}

function buildCountryMeta(countryCode) {
  const code = normalizeCountryCode(countryCode);
  const name = countryNameByCode[code] || code;
  const primaryLanguage = getCountryPrimaryLanguage(code);
  const languages = getCountryLanguages(code);

  return {
    code,
    name,
    phoneCode: (countriesData.find((country) => country.code === code) || {}).phoneCode || '',
    flagEmoji: makeFlagEmoji(code),
    flagUrl: getCountryFlagUrl(code),
    flagRemoteUrl: getCountryRemoteFlagUrl(code),
    continent: getContinent(code),
    geographicalRegion: getGeographicalRegion(code),
    shippingZone: getShippingZone(code),
    currency: getCountryCurrency(code),
    primaryLanguage,
    languages,
    regionType: getCountryRegionType(code),
    taxRegionCode: null,
    isRemoteArea: isRemoteAreaCountry(code),
    isIsland: isIslandCountry(code)
  };
}

function buildLocationData() {
  const result = {};
  countriesData.forEach((country) => {
    const countryCode = normalizeCountryCode(country.code);
    const countryMeta = buildCountryMeta(countryCode);
    const regionNames = Array.isArray(regionsByCountry[countryCode]) ? regionsByCountry[countryCode] : [];
    const regions = regionNames.map((regionName, index) => buildCountryRegion(countryCode, regionName, index, countryMeta));

    result[countryCode] = {
      ...countryMeta,
      regions
    };
  });

  return result;
}

const locationData = buildLocationData();

if (typeof window !== 'undefined') {
  window.locationData = locationData;
  window.getCountryData = getCountryData;
  window.getRegionsByCountryCode = getRegionsByCountryCode;
  window.getRegionData = getRegionData;
  window.getRegionCode = getRegionCode;
  window.getCountryFlagUrl = getCountryFlagUrl;
  window.getShippingZone = getShippingZone;
  window.getMetroAreas = getMetroAreas;
  window.getCountryLanguages = getCountryLanguages;
  window.getRegionLanguages = getRegionLanguages;
  window.getTaxRegionCode = getTaxRegionCode;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    countriesData,
    regionsByCountry,
    phoneFormatsByCountry,
    getPhoneMaxLength,
    locationData,
    getCountryData,
    getRegionsByCountryCode,
    getRegionData,
    getRegionCode,
    getCountryFlagUrl,
    getShippingZone,
    getMetroAreas,
    getCountryLanguages,
    getRegionLanguages,
    getTaxRegionCode
  };
}