// Up to 4.
// export let projectId = 99;
// export let projectName = 'BuildIt';
// console.log('in module1');

// 5. 6.
// export let projectId = 99;
// let projectName = 'BuildIt';
// export default projectName;

// 7. 8.
// let projectId = 99;
// let projectName = 'BuildIt';
// // export { projectId, projectName }; // undefined, because there is no default
// export { projectId as default, projectName };

// 9.
// export let projectId = 99;

// 10.
// export let project = {
//   projectId: 99
// };

// 11.
// export let project = { projectId: 99 };
// export function showProject() {
//   console.log(project.projectId);
// }

// 12.
// export function showProject() {
//   console.log('in original');
// }
// export function updateFunction() {
//   showProject = function() {
//     console.log('in updated');
//   };
// }
