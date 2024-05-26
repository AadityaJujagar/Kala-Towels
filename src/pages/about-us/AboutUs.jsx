import famImg from "../../../public/assets/grid-images/image1.jpg";

const AboutUs = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center p-12 gap-12 lg:w-[1024px] xl:w-[1024px]">
      <div className="flex flex-col justify-center gap-12 items-center lg:items-start lg:flex-row xl:flex-row">
        <img className="md:w-[40%] lg:w-[40%] xl:w-[40%]" src={famImg} alt="" />
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-[28px] font-bold text-slate-700">Header 1</p>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            obcaecati ratione voluptatum mollitia culpa ab atque facere
            doloremque. Dignissimos ducimus ex est eveniet iste, eaque
            quibusdam, odit unde sit rem repellat quaerat! Illo omnis ipsam quos
            velit ullam consequatur nostrum incidunt cumque laborum iure
            accusamus corrupti, perferendis necessitatibus voluptatem ab tempora
            eius quis quidem perspiciatis aspernatur placeat quia mollitia.
            Similique eius tenetur id, exercitationem maxime officia quam omnis
            a, consectetur obcaecati quidem officiis quae fugiat.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-12 items-center lg:items-start lg:flex-row xl:flex-row">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-[28px] font-bold text-slate-700">Header 2</p>
          <p className="text-slate-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            est hic sit. Reprehenderit, qui dolore obcaecati dolorem voluptates
            assumenda officiis nam ducimus enim iure laudantium sapiente quos
            quae accusamus, eveniet esse, sed autem deserunt. Nihil soluta odit
            est laborum eum sit debitis, temporibus ipsum. Officiis dolores,
            consequuntur alias temporibus quidem recusandae, provident amet
            nobis delectus culpa quo blanditiis saepe iste sunt officia harum
            qui sapiente non commodi placeat quibusdam maxime totam? Quam est
            doloribus rerum?
          </p>
        </div>
        <img className="md:w-[40%] lg:w-[40%] xl:w-[40%]" src={famImg} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[28px] font-bold text-slate-700">Header 3</p>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          corporis deserunt, mollitia recusandae voluptate neque delectus illum
          labore id iusto nam et voluptatibus quia vero odit vitae quibusdam
          odio debitis consequuntur at similique. Ducimus atque accusamus a
          dicta aliquam. Illum veniam expedita repellendus placeat quae
          obcaecati cumque nihil laboriosam dolore eaque tempora, porro non
          deserunt eligendi voluptate omnis cupiditate animi praesentium
          suscipit eos vel? Recusandae eaque excepturi fugit quidem error amet
          beatae esse nobis autem, accusamus labore quas exercitationem
          explicabo dignissimos culpa cupiditate. Voluptas reiciendis obcaecati
          dicta, incidunt ducimus quisquam?
        </p>
      </div>
      <div className="flex flex-col justify-center gap-12 items-center lg:items-start lg:flex-row xl:flex-row">
        <img src={famImg} className="md:w-[40%] lg:w-[40%] xl:w-[40%]" alt="" />
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-[28px] font-bold text-slate-700">Header 4</p>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consequatur dignissimos quae aliquid sed, aut assumenda aspernatur,
            optio numquam obcaecati, dolorem quis possimus provident ad.
            Doloremque aspernatur corporis maiores natus vero reiciendis
            accusamus, eaque sit accusantium, voluptatum quam, voluptate et
            blanditiis obcaecati quae dolores at laboriosam dolore impedit amet!
            Explicabo magni tempora deleniti vero facilis distinctio magnam,
            provident tenetur mollitia. Sequi eius nemo reprehenderit vel,
            maiores numquam? Dolorem recusandae excepturi ducimus qui molestias,
            nulla quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
