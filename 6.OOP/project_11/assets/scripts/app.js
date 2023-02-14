class DOMHelper {
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destiny = document.querySelector(newDestinationSelector);

        destiny.append(element);
    }

    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
    }

    detach() {
        if (this.element) {
            this.element.remove();
        }

        //this.element.parentElement.removeChild(this.element);
    }

    attach() {
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? 'afterbegin' : 'beforeend',
            this.element
        );
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFn) {
        super();
        this.closeNotifier = closeNotifierFn;
        this.createTooltip();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    };

    createTooltip() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY';
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectListFunction, type) {
        this.id = id;
        this.updateProjectListHandler = updateProjectListFunction;

        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }

        const tooltip = new Tooltip(() => (this.hasActiveTooltip = false));
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoButton() {
        const proyItemElement = document.getElementById(this.id);
        const moreInfoBtn = proyItemElement.querySelector(
            'button:first-of-type'
        );
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
        console.log();
    }

    connectSwitchButton(type) {
        const proyItemElement = document.getElementById(this.id);
        let switchBtn = proyItemElement.querySelector('button:last-of-type');

        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtn.addEventListener(
            'click',
            this.updateProjectListHandler.bind(null, this.id)
        );
    }

    update(updateProjectListFn, type) {
        this.updateProjectListHandler = updateProjectListFn;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;

        const proyItems = document.querySelectorAll(
            `#${this.type}-projects li`
        );

        for (const project of proyItems) {
            this.projects.push(
                new ProjectItem(project.id, this.switchProject.bind(this), type)
            );
        }

        console.log(this.projects);
    }

    setSwitchHandler(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const proyIndex = this.projects.findIndex((p) => p.id === projectId);
        // this.projects.splice(proyIndex, 1);
        this.switchHandler(this.projects.find((p) => p.id === projectId));
        this.projects = this.projects.filter((p) => p.id !== projectId);
    }
}

class App {
    static init() {
        console.log('Project Started!');

        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');

        activeProjectsList.setSwitchHandler(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.setSwitchHandler(
            activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();
