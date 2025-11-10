import { Wrapper, CityCard, Image, Content, HotelButton } from "./styles";
import saopedro from "../../assets/images/vista-sp.jpg";
import aguas from "../../assets/images/aguas.jpg";
import brotas from "../../assets/images/brotas.jpg";

export default function Cidades() {
  const cidades = [
    {
      nome: "Águas de São Pedro",
      imagem: aguas,
      descricao:
        "Pequena e charmosa, Águas de São Pedro é conhecida pelas suas fontes termais de águas medicinais, procuradas por quem busca relaxamento e bem-estar. A cidade também se destaca pelo clima tranquilo, ruas arborizadas e boa infraestrutura para receber visitantes, com hotéis, spas e restaurantes que valorizam a hospitalidade local. É um destino perfeito para quem quer descansar e aproveitar momentos de calma.",
      hotelUrl:
        "https://www.booking.com/searchresults.pt-br.html?ss=%C3%81guas+de+S%C3%A3o+Pedro",
    },
    {
      nome: "Brotas",
      imagem: brotas,
      descricao:
        "Famosa como a “capital do turismo de aventura”, Brotas é o lugar certo para quem curte contato com a natureza e esportes radicais. Entre as atrações mais procuradas estão o rafting no Rio Jacaré-Pepira, as trilhas em meio ao verde e as cachoeiras impressionantes. Além da adrenalina, a cidade oferece opções de turismo rural, gastronomia típica do interior e muito aconchego.",
      hotelUrl: "https://www.booking.com/searchresults.pt-br.html?ss=Brotas",
    },
    {
      nome: "São Pedro",
      imagem: saopedro,
      descricao:
        "Com mirantes de tirar o fôlego, São Pedro é uma cidade que combina natureza, tradição e lazer. Localizada na Serra do Itaqueri, tem vistas panorâmicas incríveis, cachoeiras e trilhas que atraem os amantes do ecoturismo. O centro histórico preserva a atmosfera de cidade do interior, com praças charmosas e igrejas antigas. É um destino que agrada tanto famílias quanto aventureiros.",
      hotelUrl:
        "https://www.booking.com/searchresults.pt-br.html?ss=S%C3%A3o+Pedro%2C+Estado+de+S%C3%A3o+Paulo%2C+Brasil&ssne=%C3%81guas+de+S%C3%A3o+Pedro&ssne_untouched=%C3%81guas+de+S%C3%A3o+Pedro&label=mkt123sc-0df61bd9-6b75-4af6-a076-74dceb764bab&aid=304142&lang=pt-br&sb=1&src_elem=sb&src=searchresults&dest_id=900050924&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=9e25b5596838f0b80334a9ea2f632088&ac_meta=GiA5ZTI1YjU1OTY4MzhmMGI4MDMzNGE5ZWEyZjYzMjA4OCAAKAEyAnhiOgpTw6NvIFBlZHJvQABKAFAA&checkin=2025-11-10&checkout=2025-11-11&group_adults=2&no_rooms=1&group_children=0",
    },
  ];

  return (
    <Wrapper>
      <h1>Cidades</h1>
      {cidades.map((cidade) => (
        <CityCard key={cidade.nome}>
          <Image src={cidade.imagem} alt={`Foto de ${cidade.nome}`} />
          <Content>
            <h2>{cidade.nome}</h2>
            <p>{cidade.descricao}</p>
            <HotelButton
              href={cidade.hotelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🏨 Ver Hotéis
            </HotelButton>
          </Content>
        </CityCard>
      ))}
    </Wrapper>
  );
}
