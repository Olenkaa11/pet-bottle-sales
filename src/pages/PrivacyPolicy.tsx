import LandingLayout from "@/components/LandingLayout";
import { useSeo } from "@/hooks/useSeo";

export default function PrivacyPolicy() {
  useSeo({
    title: "Политика конфиденциальности | ПЭТ Тара",
    description: "Как сайт tara-packing.ru обрабатывает персональные данные, полученные из заявок.",
    path: "/politika-konfidencialnosti",
  });

  return (
    <LandingLayout>
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6 text-[#333] leading-relaxed">
        <h1 className="font-light text-3xl md:text-4xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          Политика конфиденциальности
        </h1>
        <div className="space-y-5 text-sm md:text-base">
          <p>Настоящая политика описывает, как сайт tara-packing.ru («Сайт») обрабатывает персональные данные пользователей, оставивших заявку.</p>
          <h2 className="text-lg font-medium pt-2">Какие данные мы получаем</h2>
          <p>Имя, контакт для ответа (номер телефона, WhatsApp или Telegram), а также сведения о нужной продукции и количестве, если вы их указали.</p>
          <h2 className="text-lg font-medium pt-2">Для чего используются данные</h2>
          <p>Только для того, чтобы ответить на вашу заявку: прислать оптовый прайс, рассчитать стоимость и согласовать условия поставки.</p>
          <h2 className="text-lg font-medium pt-2">Передача третьим лицам</h2>
          <p>Данные не продаются и не передаются третьим лицам, за исключением случаев, предусмотренных законодательством. Заявка поступает владельцу Сайта на электронную почту и в служебный чат в мессенджере.</p>
          <h2 className="text-lg font-medium pt-2">Срок хранения</h2>
          <p>Данные хранятся не дольше, чем это необходимо для обработки заявки и ведения переговоров, после чего удаляются.</p>
          <h2 className="text-lg font-medium pt-2">Ваши права</h2>
          <p>Вы можете запросить уточнение, блокировку или удаление своих данных, а также отозвать согласие, написав на info-pet.tara@mail.ru.</p>
          <h2 className="text-lg font-medium pt-2">Статистика</h2>
          <p>Сайт использует Яндекс Метрику для анализа посещаемости. Сервис собирает обезличенные сведения о посещениях.</p>
        </div>
      </main>
    </LandingLayout>
  );
}
