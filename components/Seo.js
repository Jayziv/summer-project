import head from next/head
import { user } from '../configs/user'

export default function SearchOptimisation{
    return(
        <head>
            <title>title</title>
            <meta name="description" content="Search Optimisation" />
            <meta name="keywords" content="Search Optimisation" />
            <meta name="author" content="{ user.userName}" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
        </head>
    )

}