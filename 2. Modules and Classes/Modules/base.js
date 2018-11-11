// 1.
// console.log('in base js');

// 2.
// import { projectId, projectName } from 'module1.js';
// console.log(`${projectName} has id: ${projectId}`);
// console.log(projectId);

// 3.
// import { projectId as id, projectName } from 'module1.js';
// console.log(`${projectName} has id: ${id}`);

// 4.
// console.log('stating in base');
// import { projectId } from 'module1.js'; // import statement gets hoisted, dependencies will execute first
// console.log('ending in base');

// 5.
// import someValue from 'module1.js'; // leaving the curly braces, the module will look for default
// console.log(someValue);

// 6.
// import { default as myProjectName } from 'module1.js';
// console.log(myProjectName);

// 7.
// import someValue from 'module1.js';
// console.log(someValue);

// 8.
// import * as values from 'module1.js';
// console.log(values);

// 9.
// import { projectId } from 'module1.js';
// projectId = 8000; // error read-only
// console.log(projectId);

// 10.
// import { project } from 'module1.js';
// project.projectId = 8000;
// console.log(project.projectId); // 8000

// 11.
// import { project, showProject } from 'module1.js';
// project.projectId = 8000;
// showProject(); // 8000
// console.log(project.projectId); // 8000

// 12.
import { showProject, updateFunction } from 'module1.js';
showProject(); // in original
updateFunction();
showProject(); // in updated
