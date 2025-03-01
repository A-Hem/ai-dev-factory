# Project Structure

## Directories

- **core**: Contains the main orchestrator logic.
- **services**: Contains various services used by the orchestrator.
- **workers**: Contains worker classes for different tasks.
- **data**: Contains local data files used by the knowledge graph service.

## Files

- **core/orchestrator.ts**: Main orchestrator logic.
- **services/cacheService.ts**: Cache service for storing and retrieving cached data.
- **services/knowledgeGraphService.ts**: Knowledge graph service for managing and querying the knowledge graph.
- **services/contextPreprocessor.ts**: Service for preprocessing and compressing context data.
- **workers/localDataWorker.ts**: Worker for processing local datasets.
- **workers/staticAnalysisWorker.ts**: Worker for performing static code analysis.
- **workers/dependencyCheckerWorker.ts**: Worker for checking dependencies.
- **workers/innovationSuggestionWorker.ts**: Worker for suggesting innovative features or improvements.
- **data/dbpedia_data.json**: Sample DBpedia data file.
- **data/conceptnet_data.json**: Sample ConceptNet data file.
- **package.json**: Node.js project configuration and dependencies.
- **requirements.txt**: Python dependencies (if any).
- **structure.md**: Project structure documentation.
