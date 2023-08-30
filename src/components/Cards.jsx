import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Cards({projet, slug, img, lang}) {
    return (
        <div
            className="flex flex-col my-5 bg-white text-gray-700 rounded-lg max-w-full overflow-hidden sm:max-w-full
            md:grow md:flex-wrap md:min-w-[400px]">
            <img src={`/${img}`} alt=""
                 className="max-h-[200px] object-cover object-top"
            />
            <div className="p-[20px]">
                <h3 className="text-2xl mb-[10px] font-bold">
                    {projet}
                </h3>

                {lang && ( /* From props, get all lang of code */
                    <div className="mb-[10px]">
                        <p>{lang}</p>
                    </div>
                )}

                <Link to={`/project/${slug}`}
                      className="
                   inline-block w-fit py-2 px-4 bg-blue-600 text-white font-medium rounded-md
                   hover:bg-blue-500 hover:transition"
                >
                    <span className="text-lg">See project</span>
                </Link>
            </div>
        </div>
    )
}

Cards.propTypes = {
    projet: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    img: PropTypes.string,
    lang: PropTypes.string
};