import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './AllProjects.css'
import Navbar from '../../components/Navbar/Navbar'
import Socials from '../../components/Socials/Socials';

import { projectsData } from '../../data/projectsData';
import SingleProject from '../../components/SingleProject/SingleProject';

function AllProjects() {
    const [search, setSearch] = useState('');

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags;
        return content.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div className='projectPage'>
            <Navbar />
            <div className='vertical-center'>
                <Socials />
            </div>
            <div className='text-color-white proHeading'>
                <p className='heading'>Projects</p>
            </div>
            <div className='projectPage-container'>
                <div className='projectPage-search'>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project" className='search' ></input>
                </div>

                <div className='project-container'>
                    <Grid className="">
                        {filteredArticles.map(project => (
                            <SingleProject
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image}
                            />
                        ))
                        }
                    </Grid>
                </div>
            </div>

        </div>

    )
}

export default AllProjects
