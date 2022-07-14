// import React, { useEffect, useState } from 'react';

// import DataTable from '../common/DataTable';
// import LoaderAnimation from '../common/LoaderAnimation';

// import postApiClient from '../../services/post-api-client';

// const EffectHookAjax = () => {
//     const [data, setData] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

//     useEffect(() => {
//         postApiClient.getAllPosts().then(data => {
//             setData({ posts: [...data], message: "", flag: true });
//         }).catch(eMsg => {
//             setData({ posts: [], message: eMsg, flag: true });
//         });
//     }, []);

//     return (
//         <>
//             <div className="row mt-5">
//                 <h4 className="text-warning text-center text-uppercase font-weight-bold">{data.message}</h4>
//             </div>

//             {
//                 !data.flag ? <LoaderAnimation /> : null
//             }

//             <DataTable items={data.posts}>
//                 <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
//             </DataTable>
//         </>
//     );
// };

// export default EffectHookAjax;

// -----------------------------------------------------------------------

import React, { useEffect, useState } from 'react';

import DataTable from '../common/DataTable';
import LoaderAnimation from '../common/LoaderAnimation';

import postApiClient from '../../services/post-api-client';

const EffectHookAjax = () => {
    const [data, setData] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

    async function getAllPosts() {
        try {
            let posts_data = await postApiClient.getAllPosts();
            setData({ posts: [...posts_data], message: "", flag: true });
        } catch (eMsg) {
            setData({ posts: [], message: eMsg, flag: true });
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{data.message}</h4>
            </div>

            {
                !data.flag ? <LoaderAnimation /> : null
            }

            <DataTable items={data.posts}>
                <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
            </DataTable>
        </>
    );
};

export default EffectHookAjax;